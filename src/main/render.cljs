(ns render)

(defn render [state]
  [:div {:class ["bg-[#121212]" :min-h-screen :w-screen]}
   [:div {:class [:flex :justify-center]}
    [:div {:class [:flex :flex-col :gap-4 :w-fit]}
     [:div {:class [:h-16]}]
     [:div {:class [:w-222 :h-fit "border-[#8540c9]" :border-2 :p-2]}
      [:h1 "Welcome to a page I made to store my CS/IMGD 4300 course homework."]
      [:p "Opened at " (:app/started-at state)]]]]])
