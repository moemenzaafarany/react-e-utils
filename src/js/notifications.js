import { eType } from "./type";
import { eDom } from "./dom";

export class eNotification {
    //========< getters
    static get supported() {
        return !!window.Notification;
    }
    static get permitted() {
        return (Notification.permission === 'granted');
    }
    static get denied() {
        return (Notification.permission === 'denied');
    }
    //========< permission
    static async askPermission() {
        return new Promise((resolve) => {
            (async () => {
                try {
                    if (!eNotification.supported) return resolve(false);
                    let p = await Notification.requestPermission();
                    resolve(p === 'granted')
                } catch (err) {
                    console.trace(this?.constructor?.name, err);
                    resolve(false);
                }
            })();
        });
    }
    //========< permission
    static async askPermissionOnInteract() {
        if (!eNotification.denied && !eNotification.permitted) {
            eDom.listenEvent(document, 'click', async () => {
                try {
                    if (eNotification.supported) {
                        await Notification.requestPermission();
                    }
                } catch (err) {
                    console.trace(this?.constructor?.name, err);
                }
            }, { preventDefault: true, capture: true, once: true });
        }
    }
    //========< notify
    static async notify(title, body, {
        dir = "ltr", lang = "en", data,
        image, icon, badge,
        renotify = false, requireInteraction = false, silent = false,
        tag = "0",
        onShow, onClick, onClose, onError, autoCloseSec,
    } = {}) {
        try {
            if (!eNotification.supported) throw "Notifications not supported on browser!";
            if (eNotification.denied) throw "Notifications are not permitted!";
            if (!eNotification.permitted) {
                if (!(await eNotification.askPermission())) throw "Notifications are not permitted!";
            }
            let notif = new Notification(title, {
                body, dir, lang, data,
                image, icon, badge,
                renotify, requireInteraction, silent,
                tag, vibrate: [200, 100, 200, 100, 200, 100, 200],
            })
            if (eType.func(onShow)) notif.onshow = onShow;
            if (eType.func(onClick)) notif.onclick = onClick;
            if (eType.func(onClose)) notif.onclose = onClose;
            if (eType.func(onError)) notif.onerror = onError;
            if (autoCloseSec) {
                setTimeout(() => {
                    notif.close();
                }, autoCloseSec * 1000);
            }
        } catch (err) {
            console.trace(this?.constructor?.name, err);
            return false;
        }
    }
}
/* eNotification.askPermissionOnInteract()
eNotification.notify({
  title: "عنوان!!", body: "هيئة الجسم!!", dir: "rtl", lang: 'ar', tag: "olla senior", data: [1, 2],
  image: "https://exabytellc.com/_assets/media/logo.png", icon: "https://exabytellc.com/_assets/media/tab-icon.jpg", badge: "https://exabytellc.com/_assets/media/tab-icon.jpg",
  renotify: true, requireInteraction: true,
  onShow: (evt) => console.trace("onShow", evt),
  onClick: (evt) => console.trace("onClick", evt),
  onClose: (evt) => console.trace("onClose", evt),
  onError: (evt) => console.trace("onError", evt)
})
*/