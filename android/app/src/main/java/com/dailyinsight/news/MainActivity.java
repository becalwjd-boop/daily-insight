package com.dailyinsight.news;

import android.os.Bundle;
import androidx.activity.OnBackPressedCallback;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                bridge.getWebView().evaluateJavascript("window.location.pathname", value -> {
                    String path = value.replace("\"", "");

                    if (path.equals("/") || path.equals("")) {
                        moveTaskToBack(true);
                    } else if (path.startsWith("/archive/")) {
                        bridge.getWebView().evaluateJavascript("window.location.href='/archive'", null);
                    } else if (path.equals("/archive") || path.equals("/contact") || path.equals("/privacy")) {
                        bridge.getWebView().evaluateJavascript("window.location.href='/'", null);
                    } else {
                        bridge.getWebView().evaluateJavascript("window.history.back()", null);
                    }
                });
            }
        });
    }
}