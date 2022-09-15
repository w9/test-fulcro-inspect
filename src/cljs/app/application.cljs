(ns app.application
  (:require
   [com.fulcrologic.fulcro.application :as app]
   [com.fulcrologic.fulcro.networking.http-remote :as net]))

(defonce SPA (app/fulcro-app
               {:remotes {:remote (net/fulcro-http-remote
                                    {:url "/_api"
                                     :request-middleware (-> identity
                                                           net/wrap-fulcro-request)
                                     :response-middleware (-> identity
                                                            net/wrap-fulcro-response)})}}))
