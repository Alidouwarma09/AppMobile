package com.wally_darius.nom

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint
import com.facebook.soloader.SoLoader
import packagelist.PackageList

class MainApplication : Application(), ReactApplication {

    override val reactNativeHost: ReactNativeHost
        get() = object : DefaultReactNativeHost(this) {
            override fun getPackages(): List<ReactPackage> {
                // Utilisation de this@MainApplication pour passer un objet de type Application
                return PackageList(this@MainApplication).packages
            }

            override fun getJSMainModuleName(): String {
                return "index"
            }

            override fun getUseDeveloperSupport(): Boolean {
                return BuildConfig.DEBUG
            }

            // Pas de redéfinition de isHermesEnabled() ici
        }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            DefaultNewArchitectureEntryPoint.load()
        }
    }
}
