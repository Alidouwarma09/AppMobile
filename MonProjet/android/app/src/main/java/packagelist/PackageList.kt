package packagelist

import android.app.Application
import android.content.Context
import android.content.res.Resources
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.shell.MainPackageConfig
import com.facebook.react.shell.MainReactPackage
import java.util.Arrays

class PackageList @JvmOverloads constructor(private val application: Application, private val mConfig: MainPackageConfig? = null) {
    private val reactNativeHost: ReactNativeHost? = null

    private val resources: Resources
        private get() = application.resources
    private val applicationContext: Context
        private get() = application.applicationContext
    val packages: ArrayList<ReactPackage>
        get() = ArrayList(Arrays.asList(
                MainReactPackage(mConfig)
        ))
}