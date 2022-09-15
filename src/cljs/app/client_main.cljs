(ns app.client-main
  (:require
   [app.application :refer [SPA]]
   [com.fulcrologic.fulcro.application :as app]
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom]))

(defsc Root
  [_ {}]
  {:query []
   :initial-state {}}
  (dom/div {} "HELLO!"))

(defn ^:export refresh! []
  (app/mount! SPA Root "app"))

(defn ^:export init! []
  (app/mount! SPA Root "app"))
