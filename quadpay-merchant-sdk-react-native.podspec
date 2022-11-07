require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "quadpay-merchant-sdk-react-native"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.description  = <<-DESC
                  quadpay-merchant-sdk-react-native
                   DESC
  s.homepage     = "https://github.com/quadpay/quadpay-merchant-sdk-react-native"
  s.license			 = { :type => "mit", :file => "LICENSE" }
  s.authors      = { "Zip Co" => "global-checkout@zip.co" }
  s.ios.deployment_target		= '12.0'
  s.source       = { :git => "https://github.com/quadpay/quadpay-merchant-sdk-react-native.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,swift}"
  s.requires_arc = true

  s.dependency "React"
  s.dependency "QuadPaySDK", '~> 0.5.3-beta'
end