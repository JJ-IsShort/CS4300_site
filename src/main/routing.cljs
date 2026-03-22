(ns routing)

(def pages
  {"Home" [{} :location/Home]})

(defn extract-location [path]
  (or (when (or (= "/" path)
                (= "" path))
        {:page-id :location/Home :data {}})
      (when-let [[_ target args] (re-find #"/?#/(\w+)/?(.*)?" path)]
        (if-let [page (get pages target)]
          {:page-id (nth page 1)
           :data (let [data-cons (nth page 0 {})]
                   (if (fn? data-cons)
                     (apply data-cons args)
                     data-cons))}
          {:page-id :location/Home :data {}}))))

(defn jump-to [address store]
  (.pushState js/history "" "" address)
  (swap! store assoc :selected-page (extract-location
                                     address)))
