(ns main
  (:require
   [render]
   [nexus.registry :as nxr]
   [replicant.dom :as r]
   [routing]))

(defonce parent (js/document.getElementById "parent"))

(defonce store (atom {}))

(defn ^:dev/after-load start []
  (add-watch
   store ::render
   (fn [_ _ _ state]
     (r/render parent (render/render state))))

  (r/set-dispatch!
   (fn [dispatch-data actions]
     (nxr/dispatch store dispatch-data actions)))

  (reset! store {:app/started-at (js/Date.) :selected-page (routing/extract-location js/location.hash)}))

(nxr/register-effect! :store/assoc-in
                      (fn [_ store path value]
                        (swap! store assoc-in path value)))

(start)
