//
//  ViewController.swift
//  IosApp
//
//  Created by neo_local on 2021/09/10.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKUIDelegate {
    var webView: WKWebView!
        override func loadView() {
                super.loadView()
            let url = URL(string: "http://localhost:3000/")
            let request = URLRequest(url: url!)
            
            webView = WKWebView(frame: self.view.frame)
            webView.frame.size.height = 350
            webView.configuration.defaultWebpagePreferences.allowsContentJavaScript = true
            webView.load(request)
            self.view.addSubview(self.webView)
    }
}

