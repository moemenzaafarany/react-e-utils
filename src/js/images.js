export class eImageEditor {
    //========< image
    #canvas = document.createElement("canvas");
    #context = this.#canvas.getContext("2d");
    #source = {
        image: null,
        blob: null,
        width: null,
        height: null,
        ratio: null,
        size: null,
    };
    #output = {
        image: null,
        blob: null,
        width: null,
        height: null,
        ratio: null,
        size: null,
    };
    #edits = {
        width: null,
        height: null,
        quality: null,
        rotation: null,

        t: null,
        b: null,
        l: null,
        r: null,

        x: null,
        y: null,
        w: null,
        h: null,
    };
    get sourceData() {
        return this.#source;
    }
    get outputData() {
        return this.#output;
    }
    //========< empty const
    constructor(image) {
        this.#source.image = image;
    }
    //========< set source
    async setSource(image) {
        try {
            if (!eType.image(image, "Image")) throw `invalid image=${eStr.from(image)}`;
            //
            this.#edits = {
                width: null,
                height: null,
                quality: null,
                rotation: null,

                t: null,
                b: null,
                l: null,
                r: null,

                x: null,
                y: null,
                w: null,
                h: null,
            };
            //
            this.#source.image = image;
            this.#source.width = image.naturalWidth;
            this.#source.height = image.naturalHeight;
            this.#source.ratio = this.#source.width / this.#source.height;
            this.#source.blob = await this.#getSourceBlob();
            this.#source.size = this.#source.blob.size;
            //
            await this.#apply();
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    async setSourceFromFile(file) {
        await this.setSource(await eImageEditor.getImageFromFile(file));
    }
    async setSourceFromUrl(url) {
        await this.setSource(await eImageEditor.getImageFromUrl(url));
    }
    async #getSourceBlob() {
        return new Promise((resolve, reject) => {
            this.#canvas.width = this.#source.width;
            this.#canvas.height = this.#source.height;
            this.#context.globalCompositeOperation = "source-over";
            this.#context.clearRect(0, 0, this.#canvas.width, this.#canvas.height);
            this.#context.drawImage(
                this.#source.image,
                0,
                0,
                this.#canvas.width,
                this.#canvas.height
            );
            this.#canvas.toBlob(async (blob) => resolve(blob));
        });
    }
    //========< display
    displayCanvas(element) {
        element.append(this.#canvas);
    }
    //========< edits
    async setWidth(width, keepRatio = false) {
        if (eType.num(width)) this.#edits.width = width;
        else this.#edits.width = this.#source.width;
        if (keepRatio) this.#edits.height = this.#edits.width / this.#source.ratio;
        this.#apply();
    }
    async setHeight(height, keepRatio = false) {
        if (eType.num(height)) this.#edits.height = height;
        else this.#edits.height = this.#source.height;
        if (keepRatio) this.#edits.width = this.#edits.height * this.#source.ratio;
        this.#apply();
    }
    async setQuality(qlty) {
        this.#edits.quality = qlty / 100;
        if (this.#edits.quality === 1) this.#edits = eList.removeKeyFromObj(this.#edits, "quality");
        this.#apply();
    }
    async setRotation(rotation) {
        this.#edits.rotation = rotation * (Math.PI / 180);
        this.#apply();
    }
    async setZoom(x, y, width, height) {
        this.#edits.x = x;
        this.#edits.y = y;
        this.#edits.w = width;
        this.#edits.h = height;
        this.#apply();
    }
    async setPadding(t, b, l, r) {
        this.#edits.t = t;
        this.#edits.b = b;
        this.#edits.l = l;
        this.#edits.r = r;
        this.#apply();
    }
    async setPaddingT(t) {
        this.#edits.t = t;
        this.#apply();
    }
    async setPaddingB(b) {
        this.#edits.b = b;
        this.#apply();
    }
    async setPaddingL(l) {
        this.#edits.l = l;
        this.#apply();
    }
    async setPaddingR(r) {
        this.#edits.r = r;
        this.#apply();
    }
    //========< apply changes
    async setIcon(radius = 64, quality = 75, keepRatio = false) {
        this.setQuality(quality);
        if (!keepRatio) {
            this.setWidth(radius, keepRatio);
            this.setHeight(radius, keepRatio);
        }
        else (this.#source.ratio >= 1 ? this.setWidth(radius, keepRatio) : this.setHeight(radius, keepRatio));
    }
    async setThumbnail(radius = 225, quality = 75, keepRatio = false) {
        this.setQuality(quality);
        if (!keepRatio) {
            this.setWidth(radius, keepRatio);
            this.setHeight(radius, keepRatio);
        }
        else (this.#source.ratio >= 1 ? this.setWidth(radius, keepRatio) : this.setHeight(radius, keepRatio));
    }
    async setBanner(width = 800, height = 600, quality = 75, keepRatio = false) {
        this.setQuality(quality);
        this.setWidth(width, keepRatio);
        this.setHeight(height, keepRatio);
    }
    //========< apply changes
    async #apply() {
        return new Promise((resolve) => {
            this.#context = this.#canvas.getContext("2d");
            // new width and height
            let imageW = this.#edits.width ?? this.#source.width;
            let imageH = this.#edits.height ?? this.#source.height;
            //
            this.#canvas.width = imageW;
            this.#canvas.height = imageH;
            // 
            if (this.#edits.rotation) {
                const sinAngle = Math.sin(this.#edits.rotation);
                const cosAngle = Math.cos(this.#edits.rotation);

                this.#canvas.width = Math.abs(imageW * cosAngle) + Math.abs(imageH * sinAngle);
                this.#canvas.height = Math.abs(imageW * sinAngle) + Math.abs(imageH * cosAngle);
            }
            // set context shit
            this.#context.globalCompositeOperation = "source-over";
            // rotation 
            this.#context.translate(this.#canvas.width / 2, this.#canvas.height / 2);
            if (this.#edits.rotation) this.#context.rotate(this.#edits.rotation);
            // draw image
            this.#context.drawImage(
                this.#source.image,
                -(imageW / 2),
                -(imageH / 2),
                imageW,
                imageH
            );

            this.#canvas.toBlob(async (b1) => {
                let img1 = await eImageEditor.getImageFromUrl(URL.createObjectURL(b1));
                // reset
                this.#canvas.width = this.#edits.w ?? (this.#canvas.width + (this.#edits.r ?? 0) + (this.#edits.l ?? 0));
                this.#canvas.height = this.#edits.h ?? (this.#canvas.height + (this.#edits.b ?? 0) + (this.#edits.t ?? 0));
                // redraw
                this.#context = this.#canvas.getContext("2d");
                this.#context.globalCompositeOperation = "source-over";

                this.#context.drawImage(img1, -this.#edits.x ?? (this.#edits.l ?? 0), -this.#edits.y ?? (this.#edits.t ?? 0), img1.naturalWidth, img1.naturalHeight);

                this.#canvas.toBlob(async (b2) => {
                    let img2 = await eImageEditor.getImageFromUrl(URL.createObjectURL(b2));
                    this.#context.globalCompositeOperation = "source-atop";
                    this.#context.drawImage(img2, 0, 0, this.#canvas.width, this.#canvas.height);

                    this.#canvas.toBlob(async (blob) => {
                        this.#output.image = await eImageEditor.getImageFromUrl(URL.createObjectURL(blob));
                        this.#output.blob = blob;
                        this.#output.width = this.#canvas.width;
                        this.#output.height = this.#canvas.height;
                        this.#output.ratio = this.#output.width / this.#output.height;
                        this.#output.size = blob.size;
                        resolve();
                    }, this.#edits.quality ? "image/jpeg" : "image/png",
                        this.#edits.quality);
                }, this.#edits.quality ? "image/jpeg" : "image/png",
                    this.#edits.quality);
            });
        });
    }
    //========< apply changes
    getAsFile() {
        let arr = this.#source.image.src.split("/");
        return new File([this.#output.blob],
            arr[arr.length - 1],
            {
                type: this.#output.blob.type,
                lastModified: new Date().getTime()
            });
    }
    async getAsDataUrl() {
        return await eFile.getContentAsDataURL(this.getAsFile());
    }
    //========< getImage async
    static async getImageFromFile(file) {
        try {
            if (!eType.file(file)) throw `invalid file=${eStr.from(file)}`;
            return await eImageEditor.getImageFromUrl(
                await eFile.getContentAsDataURL(file)
            );
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return undefined;
        }
    }
    static async getImageFromUrl(url) {
        return new Promise((resolve, reject) => {
            var image = new Image();
            image.onload = (evt) => resolve(image);
            image.onerror = (evt) => reject("error loading image");
            image.src = url;
        });
    }
}