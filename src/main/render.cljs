(ns render)

(defn render [state]
  [:div {:class ["bg-[#121212]" :min-h-screen :w-screen]}
   [:div {:class [:flex :justify-center]}
    [:div {:class [:flex :flex-col :gap-4 :w-fit]}
     [:h1 "Hello world"]
     [:p "Started at " (:app/started-at state)]]]])
