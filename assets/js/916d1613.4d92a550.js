"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[4215],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return h}});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),g=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=g(i),h=n,p=c["".concat(l,".").concat(h)]||c[h]||m[h]||r;return i?a.createElement(p,o(o({ref:t},u),{},{components:i})):a.createElement(p,o({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var g=2;g<r;g++)o[g]=i[g];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}c.displayName="MDXCreateElement"},7786:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return m}});var a=i(7462),n=i(3366),r=(i(7294),i(3905)),o=["components"],s={title:"VM Live Migration Policy and Configuration",description:"Know how VM live migration works, the migration policies, how to tune the policies and check status",slug:"vm_live_migration_policy_and_configuration",authors:[{name:"Jian Wang",title:"Staff Software Engineer",url:"https://github.com/w13915984028",image_url:"https://github.com/w13915984028.png"}],tags:["harvester","virtual machine","VM","live migration","policy","strategy","configuration"],hide_table_of_contents:!1},l="VM Live Migration",g={permalink:"/kb/vm_live_migration_policy_and_configuration",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2023-09-01/vm_live_migration_policy_and_configuration.md",source:"@site/kb/2023-09-01/vm_live_migration_policy_and_configuration.md",title:"VM Live Migration Policy and Configuration",description:"Know how VM live migration works, the migration policies, how to tune the policies and check status",date:"2023-09-01T00:00:00.000Z",formattedDate:"September 1, 2023",tags:[{label:"harvester",permalink:"/kb/tags/harvester"},{label:"virtual machine",permalink:"/kb/tags/virtual-machine"},{label:"VM",permalink:"/kb/tags/vm"},{label:"live migration",permalink:"/kb/tags/live-migration"},{label:"policy",permalink:"/kb/tags/policy"},{label:"strategy",permalink:"/kb/tags/strategy"},{label:"configuration",permalink:"/kb/tags/configuration"}],readingTime:10.58,truncated:!1,authors:[{name:"Jian Wang",title:"Staff Software Engineer",url:"https://github.com/w13915984028",image_url:"https://github.com/w13915984028.png",imageURL:"https://github.com/w13915984028.png"}],frontMatter:{title:"VM Live Migration Policy and Configuration",description:"Know how VM live migration works, the migration policies, how to tune the policies and check status",slug:"vm_live_migration_policy_and_configuration",authors:[{name:"Jian Wang",title:"Staff Software Engineer",url:"https://github.com/w13915984028",image_url:"https://github.com/w13915984028.png",imageURL:"https://github.com/w13915984028.png"}],tags:["harvester","virtual machine","VM","live migration","policy","strategy","configuration"],hide_table_of_contents:!1},nextItem:{title:"Use Rook Ceph External Storage with Harvester",permalink:"/kb/use_rook_ceph_external_storage"}},u={authorsImageUrls:[void 0]},m=[{value:"General Process of VM Live Migration",id:"general-process-of-vm-live-migration",level:2},{value:"Starting a Migration from Harvester UI",id:"starting-a-migration-from-harvester-ui",level:3},{value:"Migration CRD Object",id:"migration-crd-object",level:3},{value:"Migration Status Reporting",id:"migration-status-reporting",level:3},{value:"Migration Status",id:"migration-status",level:3},{value:"VM Live Migration Strategies",id:"vm-live-migration-strategies",level:2},{value:"Understanding Different VM Live Migration Strategies",id:"understanding-different-vm-live-migration-strategies",level:3},{value:"VM Live Migration Strategy: Pre-copy",id:"vm-live-migration-strategy-pre-copy",level:4},{value:"VM Live Migration Strategy: Post-copy",id:"vm-live-migration-strategy-post-copy",level:4},{value:"VM Live Migration Strategy: Auto-converge",id:"vm-live-migration-strategy-auto-converge",level:4},{value:"Observe the VM Live Migration Progress and Result",id:"observe-the-vm-live-migration-progress-and-result",level:3},{value:"Migration Timeouts",id:"migration-timeouts",level:4},{value:"Completion Time",id:"completion-time",level:4},{value:"Progress Timeout",id:"progress-timeout",level:4},{value:"VM Live Migration Configurations",id:"vm-live-migration-configurations",level:2},{value:"Changing Cluster Wide Migration Limits",id:"changing-cluster-wide-migration-limits",level:3},{value:"Migration Policies",id:"migration-policies",level:3},{value:"Migration Configurations",id:"migration-configurations",level:4},{value:"Matching Policies to VMs",id:"matching-policies-to-vms",level:5},{value:"References",id:"references",level:2},{value:"Documents",id:"documents",level:3},{value:"Libvirt Guest Migration",id:"libvirt-guest-migration",level:3},{value:"Kubevirt Live Migration",id:"kubevirt-live-migration",level:3},{value:"Source Code",id:"source-code",level:3},{value:"Kubevirt",id:"kubevirt",level:4},{value:"Go Package Libvirt",id:"go-package-libvirt",level:4},{value:"Libvirt",id:"libvirt",level:4}],c={toc:m};function h(e){var t=e.components,i=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In Harvester, the ",(0,r.kt)("strong",{parentName:"p"},"VM Live Migration")," is well supported by the UI. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.1/vm/live-migration"},"Harvester VM Live Migration")," for more details."),(0,r.kt)("p",null,"The VM Live Migration process is finished smoothly in most cases. However, sometimes the migration may get stuck and not end as expected."),(0,r.kt)("p",null,"This article dives into the VM Live Migration process in more detail. There are three main parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"General Process of VM Live Migration"),(0,r.kt)("li",{parentName:"ul"},"VM Live Migration Strategies"),(0,r.kt)("li",{parentName:"ul"},"VM Live Migration Configurations")),(0,r.kt)("p",null,"Related issues:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4352"},"Migration should show the proper status and progress in the UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4376"},"VM Migration policy and status"))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A big part of the following contents are copied from ",(0,r.kt)("inlineCode",{parentName:"p"},"kubevirt")," document ",(0,r.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/operations/live_migration/"},"https://kubevirt.io/user-guide/operations/live_migration/"),", some contents/formats are adjusted to fit in this document."))),(0,r.kt)("h2",{id:"general-process-of-vm-live-migration"},"General Process of VM Live Migration"),(0,r.kt)("h3",{id:"starting-a-migration-from-harvester-ui"},"Starting a Migration from Harvester UI"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,r.kt)("li",{parentName:"ol"},"Find the virtual machine that you want to migrate and select ",(0,r.kt)("strong",{parentName:"li"},"\u22ee")," > ",(0,r.kt)("strong",{parentName:"li"},"Migrate"),"."),(0,r.kt)("li",{parentName:"ol"},"Choose the node to which you want to migrate the virtual machine and select ",(0,r.kt)("strong",{parentName:"li"},"Apply"),".")),(0,r.kt)("p",null,"After successfully selecting ",(0,r.kt)("strong",{parentName:"p"},"Apply"),", a CRD ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualMachineInstanceMigration")," object is created, and the related ",(0,r.kt)("inlineCode",{parentName:"p"},"controller/operator")," will start the process."),(0,r.kt)("h3",{id:"migration-crd-object"},"Migration CRD Object"),(0,r.kt)("p",null,"You can also create the CRD ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualMachineInstanceMigration")," object manually via ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," or other tools."),(0,r.kt)("p",null,"The example below starts a migration process for a virtual machine instance (VMI) ",(0,r.kt)("inlineCode",{parentName:"p"},"new-vm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: kubevirt.io/v1\nkind: VirtualMachineInstanceMigration\nmetadata:\n  name: migration-job\nspec:\n  vmiName: new-vm\n")),(0,r.kt)("p",null,"Under the hood, the open source projects ",(0,r.kt)("inlineCode",{parentName:"p"},"Kubevirt, Libvirt, QEMU, ... ")," perform most of the ",(0,r.kt)("inlineCode",{parentName:"p"},"VM Live Migration"),". ",(0,r.kt)("a",{parentName:"p",href:"#references"},"References.")),(0,r.kt)("h3",{id:"migration-status-reporting"},"Migration Status Reporting"),(0,r.kt)("p",null,"When starting a virtual machine instance (VMI), it has also been calculated whether the machine is live migratable. The result is being stored in the VMI ",(0,r.kt)("inlineCode",{parentName:"p"},"VMI.status.conditions"),". The calculation can be based on multiple parameters of the VMI, however, at the moment, the calculation is largely based on the Access Mode of the VMI volumes. Live migration is only permitted when the volume access mode is set to ReadWriteMany. Requests to migrate a non-LiveMigratable VMI will be rejected."),(0,r.kt)("p",null,"The reported Migration Method is also being calculated during VMI start. ",(0,r.kt)("inlineCode",{parentName:"p"},"BlockMigration")," indicates that some of the VMI disks require copying from the source to the destination. ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveMigration")," means that only the instance memory will be copied."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Status:\n  Conditions:\n    Status: True\n    Type: LiveMigratable\n  Migration Method: BlockMigration\n")),(0,r.kt)("h3",{id:"migration-status"},"Migration Status"),(0,r.kt)("p",null,"The migration progress status is reported in ",(0,r.kt)("inlineCode",{parentName:"p"},"VMI.status"),". Most importantly, it indicates whether the migration has been completed or failed."),(0,r.kt)("p",null,"Below is an example of a successful migration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Migration State:\n    Completed:        true\n    End Timestamp:    2019-03-29T03:37:52Z\n    Migration Config:\n      Completion Timeout Per GiB:  800\n      Progress Timeout:             150\n    Migration UID:                  c64d4898-51d3-11e9-b370-525500d15501\n    Source Node:                    node02\n    Start Timestamp:                2019-03-29T04:02:47Z\n    Target Direct Migration Node Ports:\n      35001:                      0\n      41068:                      49152\n      38284:                      49153\n    Target Node:                  node01\n    Target Node Address:          10.128.0.46\n    Target Node Domain Detected:  true\n    Target Pod:                   virt-launcher-testvmimcbjgw6zrzcmp8wpddvztvzm7x2k6cjbdgktwv8tkq\n")),(0,r.kt)("h2",{id:"vm-live-migration-strategies"},"VM Live Migration Strategies"),(0,r.kt)("p",null,"VM Live Migration is a process during which a running Virtual Machine Instance moves to another compute node while the guest workload continues to run and remain accessible."),(0,r.kt)("h3",{id:"understanding-different-vm-live-migration-strategies"},"Understanding Different VM Live Migration Strategies"),(0,r.kt)("p",null,"VM Live Migration is a complex process. During a migration, the source VM needs to transfer its whole state (mainly RAM) to the target VM. If there are enough resources available, such as network bandwidth and CPU power, migrations should converge nicely. If this is not the scenario, however, the migration might get stuck without an ability to progress."),(0,r.kt)("p",null,"The main factor that affects migrations from the guest perspective is its dirty rate, which is the rate by which the VM dirties memory. Guests with high dirty rate lead to a race during migration. On the one hand, memory would be transferred continuously to the target, and on the other, the same memory would get dirty by the guest. On such scenarios, one could consider to use more advanced migration strategies. Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/operations/live_migration/#understanding-different-migration-strategies"},"Understanding different migration strategies")," for more details."),(0,r.kt)("p",null,"There are 3 ",(0,r.kt)("inlineCode",{parentName:"p"},"VM Live Migration")," strategies/policies:"),(0,r.kt)("h4",{id:"vm-live-migration-strategy-pre-copy"},"VM Live Migration Strategy: Pre-copy"),(0,r.kt)("p",null,"Pre-copy is the default strategy. It should be used for most cases."),(0,r.kt)("p",null,"The way it works is as following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The target VM is created, but the guest keeps running on the source VM."),(0,r.kt)("li",{parentName:"ol"},"The source starts sending chunks of VM state (mostly memory) to the target. This continues until all of the state has been transferred to the target."),(0,r.kt)("li",{parentName:"ol"},"The guest starts executing on the target VM. 4. The source VM is being removed.")),(0,r.kt)("p",null,"Pre-copy is the safest and fastest strategy for most cases. Furthermore, it can be easily cancelled, can utilize multithreading, and more. If there is no real reason to use another strategy, this is definitely the strategy to go with."),(0,r.kt)("p",null,"However, on some cases migrations might not converge easily, that is, by the time the chunk of source VM state would be received by the target VM, it would already be mutated by the source VM (which is the VM the guest executes on). There are many reasons for migrations to fail converging, such as a high dirty-rate or low resources like network bandwidth and CPU. On such scenarios, see the following alternative strategies below."),(0,r.kt)("h4",{id:"vm-live-migration-strategy-post-copy"},"VM Live Migration Strategy: Post-copy"),(0,r.kt)("p",null,"The way post-copy migrations work is as following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The target VM is created."),(0,r.kt)("li",{parentName:"ol"},"The guest is being run on the target VM."),(0,r.kt)("li",{parentName:"ol"},"The source starts sending chunks of VM state (mostly memory) to the target."),(0,r.kt)("li",{parentName:"ol"},"When the guest, running on the target VM, would access memory: 1. If the memory exists on the target VM, the guest can access it. 2. Otherwise, the target VM asks for a chunk of memory from the source VM."),(0,r.kt)("li",{parentName:"ol"},"Once all of the memory state is updated at the target VM, the source VM is being removed.")),(0,r.kt)("p",null,"The main idea here is that the guest starts to run immediately on the target VM. This approach has advantages and disadvantages:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advantages:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The same memory chink is never being transferred twice. This is possible due to the fact that with post-copy it doesn't matter that a page had been dirtied since the guest is already running on the target VM."),(0,r.kt)("li",{parentName:"ul"},"This means that a high dirty-rate has much less effect."),(0,r.kt)("li",{parentName:"ul"},"Consumes less network bandwidth.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Disadvantages:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When using post-copy, the VM state has no one source of truth. When the guest (running on the target VM) writes to memory, this memory is one part of the guest's state, but some other parts of it may still be updated only at the source VM. This situation is generally dangerous, since, for example, if either the target or guest VMs crash the state cannot be recovered."),(0,r.kt)("li",{parentName:"ul"},"Slow warmup: when the guest starts executing, no memory is present at the target VM. Therefore, the guest would have to wait for a lot of memory in a short period of time."),(0,r.kt)("li",{parentName:"ul"},"Slower than pre-copy on most cases."),(0,r.kt)("li",{parentName:"ul"},"Harder to cancel a migration.")),(0,r.kt)("h4",{id:"vm-live-migration-strategy-auto-converge"},"VM Live Migration Strategy: Auto-converge"),(0,r.kt)("p",null,"Auto-converge is a technique to help pre-copy migrations converge faster without changing the core algorithm of how the migration works."),(0,r.kt)("p",null,"Since a high dirty-rate is usually the most significant factor for migrations to not converge, auto-converge simply throttles the guest's CPU. If the migration would converge fast enough, the guest's CPU would not be throttled or throttled negligibly. But, if the migration would not converge fast enough, the CPU would be throttled more and more as time goes."),(0,r.kt)("p",null,"This technique dramatically increases the probability of the migration converging eventually."),(0,r.kt)("h3",{id:"observe-the-vm-live-migration-progress-and-result"},"Observe the VM Live Migration Progress and Result"),(0,r.kt)("h4",{id:"migration-timeouts"},"Migration Timeouts"),(0,r.kt)("p",null,"Depending on the type, the live migration process will copy virtual machine memory pages and disk blocks to the destination. During this process non-locked pages and blocks are being copied and become free for the instance to use again. To achieve a successful migration, it is assumed that the instance will write to the free pages and blocks (pollute the pages) at a lower rate than these are being copied."),(0,r.kt)("h4",{id:"completion-time"},"Completion Time"),(0,r.kt)("p",null,"In some cases the virtual machine can write to different memory pages / disk blocks at a higher rate than these can be copied, which will prevent the migration process from completing in a reasonable amount of time. In this case, live migration will be aborted if it is running for a long period of time. The timeout is calculated base on the size of the VMI, it's memory and the ephemeral disks that are needed to be copied. The configurable parameter completionTimeoutPerGiB, which defaults to 800s is the time for GiB of data to wait for the migration to be completed before aborting it. A VMI with 8Gib of memory will time out after 6400 seconds."),(0,r.kt)("h4",{id:"progress-timeout"},"Progress Timeout"),(0,r.kt)("p",null,"A VM Live Migration will also be aborted when it notices that copying memory doesn't make any progress. The time to wait for live migration to make progress in transferring data is configurable by the ",(0,r.kt)("inlineCode",{parentName:"p"},"progressTimeout")," parameter, which defaults to 150 seconds."),(0,r.kt)("h2",{id:"vm-live-migration-configurations"},"VM Live Migration Configurations"),(0,r.kt)("h3",{id:"changing-cluster-wide-migration-limits"},"Changing Cluster Wide Migration Limits"),(0,r.kt)("p",null,"KubeVirt puts some limits in place so that migrations don't overwhelm the cluster. By default, it is to only run 5 migrations in parallel with an additional limit of a maximum of 2 outbound migrations per node. Finally, every migration is limited to a bandwidth of 64MiB/s."),(0,r.kt)("p",null,"You can change these values in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubevirt")," CR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    apiVersion: kubevirt.io/v1\n    kind: Kubevirt\n    metadata:\n      name: kubevirt\n      namespace: kubevirt\n    spec:\n      configuration:\n        migrations:\n          parallelMigrationsPerCluster: 5\n          parallelOutboundMigrationsPerNode: 2\n          bandwidthPerMigration: 64Mi\n          completionTimeoutPerGiB: 800\n          progressTimeout: 150\n          disableTLS: false\n          nodeDrainTaintKey: "kubevirt.io/drain"\n          allowAutoConverge: false ---------------------\x3e related to: Auto-converge\n          allowPostCopy: false -------------------------\x3e related to: Post-copy\n          unsafeMigrationOverride: false\n')),(0,r.kt)("p",null,"Remember that most of these configurations can be overridden and fine-tuned to a specified group of VMs. For more information, please refer to the Migration Policies section below."),(0,r.kt)("h3",{id:"migration-policies"},"Migration Policies"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/operations/migration_policies/"},"Migration policies")," provides a new way of applying migration configurations to Virtual Machines. The policies can refine Kubevirt CR's ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationConfiguration")," that sets the cluster-wide migration configurations. This way, the cluster-wide settings default how the migration policy can be refined (i.e., changed, removed, or added)."),(0,r.kt)("p",null,"Remember that migration policies are in version ",(0,r.kt)("inlineCode",{parentName:"p"},"v1alpha1"),". This means that this API is not fully stable yet and that APIs may change in the future."),(0,r.kt)("h4",{id:"migration-configurations"},"Migration Configurations"),(0,r.kt)("p",null,"Currently, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationPolicy")," spec only includes the following configurations from Kubevirt CR's ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationConfiguration"),". (In the future, more configurations that aren't part of Kubevirt CR will be added):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: migrations.kubevirt.io/v1alpha1\nkind: MigrationPolicy\n  spec:\n    allowAutoConverge: true\n    bandwidthPerMigration: 217Ki\n    completionTimeoutPerGiB: 23\n    allowPostCopy: false\n")),(0,r.kt)("p",null,"All the above fields are optional. When omitted, the configuration will be applied as defined in KubevirtCR's ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationConfiguration"),". This way, KubevirtCR will serve as a configurable set of defaults for both VMs that are not bound to any ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationPolicy")," and VMs that are bound to a ",(0,r.kt)("inlineCode",{parentName:"p"},"MigrationPolicy")," that does not define all fields of the configurations."),(0,r.kt)("h5",{id:"matching-policies-to-vms"},"Matching Policies to VMs"),(0,r.kt)("p",null,"Next in the spec are the selectors defining the group of VMs to apply the policy. The options to do so are the following."),(0,r.kt)("p",null,"This policy applies to the VMs in namespaces that have all the required labels:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: migrations.kubevirt.io/v1alpha1\nkind: MigrationPolicy\n  spec:\n  selectors:\n    namespaceSelector:\n      hpc-workloads: true       # Matches a key and a value\n")),(0,r.kt)("p",null,"The policy below applies to the VMs that have all the required labels:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"apiVersion: migrations.kubevirt.io/v1alpha1\nkind: MigrationPolicy\n  spec:\n  selectors:\n    virtualMachineInstanceSelector:\n      workload-type: db       # Matches a key and a value\n")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("h3",{id:"documents"},"Documents"),(0,r.kt)("h3",{id:"libvirt-guest-migration"},"Libvirt Guest Migration"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Libvirt")," has a chapter to describe the pricipal of ",(0,r.kt)("inlineCode",{parentName:"p"},"VM/Guest Live Migration"),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://libvirt.org/migration.html"},"https://libvirt.org/migration.html")),(0,r.kt)("h3",{id:"kubevirt-live-migration"},"Kubevirt Live Migration"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/operations/live_migration/"},"https://kubevirt.io/user-guide/operations/live_migration/")),(0,r.kt)("h3",{id:"source-code"},"Source Code"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"VM Live Migration")," related configuration options are passed to each layer correspondingly."),(0,r.kt)("h4",{id:"kubevirt"},"Kubevirt"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubevirt/kubevirt/blob/d425593ae392111dab80403ef0cde82625e37653/pkg/virt-launcher/virtwrap/live-migration-source.go#L103"},"https://github.com/kubevirt/kubevirt/blob/d425593ae392111dab80403ef0cde82625e37653/pkg/virt-launcher/virtwrap/live-migration-source.go#L103")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'...\nimport "libvirt.org/go/libvirt"\n\n...\n\nfunc generateMigrationFlags(isBlockMigration, migratePaused bool, options *cmdclient.MigrationOptions) libvirt.DomainMigrateFlags {\n...\n    if options.AllowAutoConverge {\n        migrateFlags |= libvirt.MIGRATE_AUTO_CONVERGE\n    }\n    if options.AllowPostCopy {\n        migrateFlags |= libvirt.MIGRATE_POSTCOPY\n    }\n...\n}\n')),(0,r.kt)("h4",{id:"go-package-libvirt"},"Go Package Libvirt"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/libvirt.org/go/libvirt"},"https://pkg.go.dev/libvirt.org/go/libvirt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const (\n...\n    MIGRATE_AUTO_CONVERGE                 = DomainMigrateFlags(C.VIR_MIGRATE_AUTO_CONVERGE)\n    MIGRATE_RDMA_PIN_ALL                  = DomainMigrateFlags(C.VIR_MIGRATE_RDMA_PIN_ALL)\n    MIGRATE_POSTCOPY                      = DomainMigrateFlags(C.VIR_MIGRATE_POSTCOPY)\n...\n)\n")),(0,r.kt)("h4",{id:"libvirt"},"Libvirt"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/libvirt/libvirt/blob/bfe53e9145cd5996a791c5caff0686572b850f82/include/libvirt/libvirt-domain.h#L1030"},"https://github.com/libvirt/libvirt/blob/bfe53e9145cd5996a791c5caff0686572b850f82/include/libvirt/libvirt-domain.h#L1030")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"    /* Enable algorithms that ensure a live migration will eventually converge.\n     * This usually means the domain will be slowed down to make sure it does\n     * not change its memory faster than a hypervisor can transfer the changed\n     * memory to the destination host. VIR_MIGRATE_PARAM_AUTO_CONVERGE_*\n     * parameters can be used to tune the algorithm.\n     *\n     * Since: 1.2.3\n     */\n    VIR_MIGRATE_AUTO_CONVERGE = (1 << 13),\n...\n   /* Setting the VIR_MIGRATE_POSTCOPY flag tells libvirt to enable post-copy\n     * migration. However, the migration will start normally and\n     * virDomainMigrateStartPostCopy needs to be called to switch it into the\n     * post-copy mode. See virDomainMigrateStartPostCopy for more details.\n     *\n     * Since: 1.3.3\n     */\n    VIR_MIGRATE_POSTCOPY = (1 << 15),\n")))}h.isMDXComponent=!0}}]);