(self.webpackChunkharvesterhci=self.webpackChunkharvesterhci||[]).push([[577],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3331:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var a=t(2122),r=t(9756),l=(t(7294),t(3905)),o={sidebar_position:3},s={unversionedId:"installation/harvester-configuration",id:"version-0.2.0/installation/harvester-configuration",isDocsHomePage:!1,title:"Harvester Configuration",description:"Harvester configuration file can be provided during manual or automatic installation to configure various settings. The following is an configuration example:",source:"@site/versioned_docs/version-0.2.0/installation/harvester-configuration.md",sourceDirName:"installation",slug:"/installation/harvester-configuration",permalink:"/docs/installation/harvester-configuration",editUrl:"https://github.com/harvester/harvester.github.io/edit/master/website/versioned_docs/version-0.2.0/installation/harvester-configuration.md",version:"0.2.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.2.0/tutorialSidebar",previous:{title:"PXE Boot Install",permalink:"/docs/installation/pxe-boot-install"},next:{title:"Authentication",permalink:"/docs/authentication"}},i=[{value:"Configuration Reference",id:"configuration-reference",children:[{value:"<code>server_url</code>",id:"server_url",children:[]},{value:"<code>token</code>",id:"token",children:[]},{value:"<code>os.ssh_authorized_keys</code>",id:"osssh_authorized_keys",children:[]},{value:"<code>os.hostname</code>",id:"oshostname",children:[]},{value:"<code>os.modules</code>",id:"osmodules",children:[]},{value:"<code>os.sysctls</code>",id:"ossysctls",children:[]},{value:"<code>os.ntp_servers</code>",id:"osntp_servers",children:[]},{value:"<code>os.dns_nameservers</code>",id:"osdns_nameservers",children:[]},{value:"<code>os.wifi</code>",id:"oswifi",children:[]},{value:"<code>os.password</code>",id:"ospassword",children:[]},{value:"<code>os.environment</code>",id:"osenvironment",children:[]},{value:"<code>install.mode</code>",id:"installmode",children:[]},{value:"<code>install.mgmtInterface</code>",id:"installmgmtinterface",children:[]},{value:"<code>install.force_efi</code>",id:"installforce_efi",children:[]},{value:"<code>install.device</code>",id:"installdevice",children:[]},{value:"<code>install.silent</code>",id:"installsilent",children:[]},{value:"<code>install.iso_url</code>",id:"installiso_url",children:[]},{value:"<code>install.poweroff</code>",id:"installpoweroff",children:[]},{value:"<code>install.no_format</code>",id:"installno_format",children:[]},{value:"<code>install.debug</code>",id:"installdebug",children:[]},{value:"<code>install.tty</code>",id:"installtty",children:[]}]}],d={toc:i};function c(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Harvester configuration file can be provided during manual or automatic installation to configure various settings. The following is an configuration example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'server_url: https://someserver:6443\ntoken: TOKEN_VALUE\nos:\n  ssh_authorized_keys:\n  - ssh-rsa AAAAB3NzaC1yc2EAAAADAQAB...\n  - github:username\n  hostname: myhost\n  modules:\n  - kvm\n  - nvme\n  sysctl:\n    kernel.printk: "4 4 1 7"\n    kernel.kptr_restrict: "1"\n  dns_nameservers:\n  - 8.8.8.8\n  - 1.1.1.1\n  ntp_servers:\n  - 0.us.pool.ntp.org\n  - 1.us.pool.ntp.org\n  wifi:\n  - name: home\n    passphrase: mypassword\n  - name: nothome\n    passphrase: somethingelse\n  password: rancher\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\ninstall:\n  mode: create\n  mgmtInterface: eth0\n  force_efi: true\n  device: /dev/vda\n  silent: true\n  iso_url: http://myserver/test.iso\n  poweroff: true\n  no_format: true\n  debug: true\n  tty: ttyS0\n')),(0,l.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,l.kt)("p",null,"Below is a reference of all configuration keys."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,l.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file contains credentials which should be kept secretly. Please do not make the configuration file publicly accessible at the moment.")),(0,l.kt)("h3",{id:"server_url"},(0,l.kt)("inlineCode",{parentName:"h3"},"server_url")),(0,l.kt)("p",null,"The URL of the Harvester server to join as an agent."),(0,l.kt)("p",null,"This configuration is mandatory when the installation is in ",(0,l.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. It tells the Harvester installer where the main server is."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"server_url: https://someserver:6443\ninstall:\n  mode: join\n")),(0,l.kt)("h3",{id:"token"},(0,l.kt)("inlineCode",{parentName:"h3"},"token")),(0,l.kt)("p",null,"The cluster secret or node token. If the value matches the format of a node token it will\nautomatically be assumed to be a node token. Otherwise it is treated as a cluster secret."),(0,l.kt)("p",null,"In order for a new node to join the Harvester cluster, the token should match from what server has."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"token: myclustersecret\n")),(0,l.kt)("p",null,"Or a node token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'token: "K1074ec55daebdf54ef48294b0ddf0ce1c3cb64ee7e3d0b9ec79fbc7baf1f7ddac6::node:77689533d0140c7019416603a05275d4"\n')),(0,l.kt)("h3",{id:"osssh_authorized_keys"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.ssh_authorized_keys")),(0,l.kt)("p",null,"A list of SSH authorized keys that should be added to the default user ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher"),". SSH keys can be obtained from GitHub user accounts by using the format\n",(0,l.kt)("inlineCode",{parentName:"p"},"github:${USERNAME}"),". This is done by downloading the keys from ",(0,l.kt)("inlineCode",{parentName:"p"},"https://github.com/${USERNAME}.keys"),"."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  ssh_authorized_keys:\n  - "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2TBZGjE+J8ag11dzkFT58J3XPONrDVmalCNrKxsfADfyy0eqdZrG8hcAxAR/5zuj90Gin2uBR4Sw6Cn4VHsPZcFpXyQCjK1QDADj+WcuhpXOIOY3AB0LZBly9NI0ll+8lo3QtEaoyRLtrMBhQ6Mooy2M3MTG4JNwU9o3yInuqZWf9PvtW6KxMl+ygg1xZkljhemGZ9k0wSrjqif+8usNbzVlCOVQmZwZA+BZxbdcLNwkg7zWJSXzDIXyqM6iWPGXQDEbWLq3+HR1qKucTCSxjbqoe0FD5xcW7NHIME5XKX84yH92n6yn+rxSsyUfhJWYqJd+i0fKf5UbN6qLrtd/D"\n  - "github:ibuildthecloud"\n')),(0,l.kt)("h3",{id:"oshostname"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.hostname")),(0,l.kt)("p",null,"Set the system hostname. This value will be overwritten by DHCP if DHCP supplies a hostname for\nthe system. If DHCP doesn't offer a hostname and this value is empty, a random hostname will be generated."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  hostname: myhostname\n")),(0,l.kt)("h3",{id:"osmodules"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.modules")),(0,l.kt)("p",null,"A list of kernel modules to be loaded on start."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  modules:\n  - kvm\n  - nvme\n")),(0,l.kt)("h3",{id:"ossysctls"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.sysctls")),(0,l.kt)("p",null,"Kernel sysctl to setup on start. These are the same configuration you'd typically find in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf"),".\nMust be specified as string values."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  sysctl:\n    kernel.printk: 4 4 1 7      # the YAML parser will read as a string\n    kernel.kptr_restrict: "1"   # force the YAML parser to read as a string\n')),(0,l.kt)("h3",{id:"osntp_servers"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.ntp_servers")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Fallback")," ntp servers to use if NTP is not configured elsewhere in the OS."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  ntp_servers:\n  - 0.us.pool.ntp.org\n  - 1.us.pool.ntp.org\n")),(0,l.kt)("h3",{id:"osdns_nameservers"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.dns_nameservers")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Fallback")," DNS name servers to use if DNS is not configured by DHCP or in the OS."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  dns_nameservers:\n  - 8.8.8.8\n  - 1.1.1.1\n")),(0,l.kt)("h3",{id:"oswifi"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.wifi")),(0,l.kt)("p",null,"Simple wifi configuration. All that is accepted is ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"passphrase"),"."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  wifi:\n  - name: home\n    passphrase: mypassword\n  - name: nothome\n    passphrase: somethingelse\n")),(0,l.kt)("h3",{id:"ospassword"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.password")),(0,l.kt)("p",null,"The password for the default user ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher"),". By default there is no password for the ",(0,l.kt)("inlineCode",{parentName:"p"},"rancher")," user.\nIf you set a password at runtime it will be reset on next boot. The\nvalue of the password can be clear text or an encrypted form. The easiest way to get this encrypted\nform is to just change your password on a Linux system and copy the value of the second field from\n",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/shadow"),". You can also encrypt a password using ",(0,l.kt)("inlineCode",{parentName:"p"},"openssl passwd -1"),"."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  password: "$1$tYtghCfK$QHa51MS6MVAcfUKuOzNKt0"\n')),(0,l.kt)("p",null,"Or clear text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  password: supersecure\n")),(0,l.kt)("h3",{id:"osenvironment"},(0,l.kt)("inlineCode",{parentName:"h3"},"os.environment")),(0,l.kt)("p",null,"Environment variables to be set on k3s and other processes like the boot process.\nPrimary use of this field is to set the http proxy."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\n")),(0,l.kt)("h3",{id:"installmode"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.mode")),(0,l.kt)("p",null,"Harvester installer mode:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"create"),": Creating a new Harvester installer"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"join"),": Join an existing Harvester installer. Need to specify ",(0,l.kt)("inlineCode",{parentName:"li"},"server_url"),".")),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  mode: create\n")),(0,l.kt)("h3",{id:"installmgmtinterface"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.mgmtInterface")),(0,l.kt)("p",null,"The interface that used to build VM fabric network."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  mgmtInterface: eth0\n")),(0,l.kt)("h3",{id:"installforce_efi"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.force_efi")),(0,l.kt)("p",null,"Force EFI installation even when EFI is not detected. Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"installdevice"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.device")),(0,l.kt)("p",null,"The device to install the OS."),(0,l.kt)("h3",{id:"installsilent"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.silent")),(0,l.kt)("p",null,"Reserved."),(0,l.kt)("h3",{id:"installiso_url"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.iso_url")),(0,l.kt)("p",null,"ISO to download and install from if booting from kernel/vmlinuz and not ISO."),(0,l.kt)("h3",{id:"installpoweroff"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.poweroff")),(0,l.kt)("p",null,"Shutdown the machine after install instead of rebooting"),(0,l.kt)("h3",{id:"installno_format"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.no_format")),(0,l.kt)("p",null,"Do not partition and format, assume layout exists already."),(0,l.kt)("h3",{id:"installdebug"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.debug")),(0,l.kt)("p",null,"Run installation with more logging and configure debug for installed system."),(0,l.kt)("h3",{id:"installtty"},(0,l.kt)("inlineCode",{parentName:"h3"},"install.tty")),(0,l.kt)("p",null,"The tty device used for console."),(0,l.kt)("p",null,"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  tty: ttyS0,115200n8\n")))}c.isMDXComponent=!0}}]);