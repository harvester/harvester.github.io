"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[5170],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8065:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={title:"Renew Harvester Cloud Credentials",description:"How to renew expired Harvester cloud credentials when using Rancher 2.8.x.",slug:"renew_harvester_cloud_credentials",authors:[{name:"Gaurav Mehta",title:"Staff Software Engineer",url:"https://github.com/ibrokethecloud",image_url:"https://github.com/ibrokethecloud.png"},{name:"Moritz R\xf6hrich",title:"Senior Quality Assurance Engineer",url:"https://github.com/m-ildefons",image_url:"https://github.com/m-ildefons.png"}],tags:["harvester","cloud credentials","rancher"],hide_table_of_contents:!1},s=void 0,l={permalink:"/kb/renew_harvester_cloud_credentials",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2024-05-17/modify_cloud_credential_ttl.md",source:"@site/kb/2024-05-17/modify_cloud_credential_ttl.md",title:"Renew Harvester Cloud Credentials",description:"How to renew expired Harvester cloud credentials when using Rancher 2.8.x.",date:"2024-05-17T00:00:00.000Z",formattedDate:"May 17, 2024",tags:[{label:"harvester",permalink:"/kb/tags/harvester"},{label:"cloud credentials",permalink:"/kb/tags/cloud-credentials"},{label:"rancher",permalink:"/kb/tags/rancher"}],readingTime:1.14,truncated:!1,authors:[{name:"Gaurav Mehta",title:"Staff Software Engineer",url:"https://github.com/ibrokethecloud",image_url:"https://github.com/ibrokethecloud.png",imageURL:"https://github.com/ibrokethecloud.png"},{name:"Moritz R\xf6hrich",title:"Senior Quality Assurance Engineer",url:"https://github.com/m-ildefons",image_url:"https://github.com/m-ildefons.png",imageURL:"https://github.com/m-ildefons.png"}],frontMatter:{title:"Renew Harvester Cloud Credentials",description:"How to renew expired Harvester cloud credentials when using Rancher 2.8.x.",slug:"renew_harvester_cloud_credentials",authors:[{name:"Gaurav Mehta",title:"Staff Software Engineer",url:"https://github.com/ibrokethecloud",image_url:"https://github.com/ibrokethecloud.png",imageURL:"https://github.com/ibrokethecloud.png"},{name:"Moritz R\xf6hrich",title:"Senior Quality Assurance Engineer",url:"https://github.com/m-ildefons",image_url:"https://github.com/m-ildefons.png",imageURL:"https://github.com/m-ildefons.png"}],tags:["harvester","cloud credentials","rancher"],hide_table_of_contents:!1},prevItem:{title:"Best Practices for Harvester Security",permalink:"/kb/harvester_security_best_practices"},nextItem:{title:"Configuring Harvester to Boot from an iSCSI Root Disk in Special Circumstances",permalink:"/kb/install_iscsi_firmware_install_boot"}},u={authorsImageUrls:[void 0,void 0]},p=[{value:"Expiration of kubeconfig Tokens in Rancher 2.8.x",id:"expiration-of-kubeconfig-tokens-in-rancher-28x",level:2},{value:"Workaround",id:"workaround",level:2}],d={toc:p};function h(e){var t=e.components,c=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"expiration-of-kubeconfig-tokens-in-rancher-28x"},"Expiration of kubeconfig Tokens in Rancher 2.8.x"),(0,i.kt)("p",null,"In Rancher 2.8.x, the default value of the ",(0,i.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/api/api-tokens#kubeconfig-default-token-ttl-minutes"},"kubeconfig-default-token-ttl-minutes")," setting is ",(0,i.kt)("inlineCode",{parentName:"p"},"30")," days."),(0,i.kt)("p",null,"A side effect of using this default value is the expiration of authentication tokens embedded in kubeconfigs that Rancher uses to provision guest Kubernetes clusters on Harvester. When such tokens expire, Rancher loses the ability to perform management operations for the corresponding Rancher-managed guest Kubernetes clusters. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/44912"},"Issue #44912")," tracks the issue described in this article."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The issue affects only guest Kubernetes clusters running on Harvester that use cloud credentials created after installing or upgrading to Rancher v2.8.x."))),(0,i.kt)("h2",{id:"workaround"},"Workaround"),(0,i.kt)("p",null,"You can patch the expired Harvester cloud credentials to use a new authentication token."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Identify the expired cloud credentials and which Harvester cluster is\naffected by them."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"identify-credentials",src:n(2727).Z,width:"2231",height:"980"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download a new kubeconfig file for the affected Harvester cluster."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{loading:"lazy",alt:"context-menu",src:n(643).Z,width:"2037",height:"945"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Patch the cloud credentials. The cloud credential is stored as a secret in ",(0,i.kt)("inlineCode",{parentName:"p"},"cattle-global-data")," namespace, and can be replaced with the new kubeconfig file. Ensure that the environment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"KUBECONFIG_FILE")," contains the path to the new kubeconfig file."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'#!/bin/sh\nCLOUD_CREDENTIAL_NAME=$1\nKUBECONFIG_FILE=$2\n\nkubeconfig="$(base64 -w 0 "${KUBECONFIG_FILE}")"\n\npatch_file=$(mktemp)\n\ncat > ${patch_file} <<EOF\ndata:\n  harvestercredentialConfig-kubeconfigContent: $kubeconfig\nEOF\n\nkubectl patch secret ${CLOUD_CREDENTIAL_NAME} -n cattle-global-data --patch-file ${patch_file} --type merge\nrm ${patch_file}\n')),(0,i.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"macOS users must use ",(0,i.kt)("inlineCode",{parentName:"p"},"gbase64")," to ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"-w")," flag is supported."))))))}h.isMDXComponent=!0},643:function(e,t,n){t.Z=n.p+"assets/images/harvester-renew-kubeconfig-menu-988dc9a3898df89b96f1933a2455a0da.png"},2727:function(e,t,n){t.Z=n.p+"assets/images/identify-cloud-credential-96a0eea63d2ff91994343792fff4065f.png"}}]);