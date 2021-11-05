import{r as e,o as s,c as a,a as o,w as n,F as l,b as t,d as r}from"./app.3b79bb69.js";const i={},c=t('<h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1><p><code>asdf</code> installation involves:</p><ol><li>Installing dependencies</li><li>Downloading <code>asdf</code> core</li><li>Installing <code>asdf</code></li><li>Installing a plugin for each tool/runtime you wish to manage</li><li>Installing a version of the tool/runtime</li><li>Setting global and project versions via <code>.tool-versions</code> config files</li></ol><h2 id="_1-install-dependencies" tabindex="-1"><a class="header-anchor" href="#_1-install-dependencies" aria-hidden="true">#</a> 1. Install Dependencies</h2><p><strong>Linux</strong>:</p><table><thead><tr><th>Package Manager</th><th>Command</th></tr></thead><tbody><tr><td>Aptitude</td><td><code>sudo apt install curl git</code></td></tr><tr><td>DNF</td><td><code>sudo dnf install curl git</code></td></tr><tr><td>Pacman</td><td><code>sudo pacman -S curl git</code></td></tr><tr><td>Zypper</td><td><code>sudo zypper install curl git</code></td></tr></tbody></table><p><strong>macOS</strong>:</p><table><thead><tr><th>Package Manager</th><th>Command</th></tr></thead><tbody><tr><td>Homebrew</td><td>Dependencies will be automatically installed by Homebrew.</td></tr><tr><td>Spack</td><td><code>spack install coreutils curl git</code></td></tr></tbody></table><h2 id="_2-download-asdf" tabindex="-1"><a class="header-anchor" href="#_2-download-asdf" aria-hidden="true">#</a> 2. Download asdf</h2><p>We recommend using Git, though there are other platform specific methods:</p>',10),d=o("thead",null,[o("tr",null,[o("th",null,"Method"),o("th",null,"Command")])],-1),p=o("tr",null,[o("td",null,"Git"),o("td",null,[o("code",null,"git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.8.1")])],-1),h=o("tr",null,[o("td",null,"Homebrew"),o("td",null,[o("code",null,"brew install asdf")])],-1),u=o("td",null,"Pacman",-1),m=o("code",null,"git clone https://aur.archlinux.org/asdf-vm.git && cd asdf-vm && makepkg -si",-1),g=r(" or use your preferred "),f={href:"https://wiki.archlinux.org/index.php/AUR_helpers",target:"_blank",rel:"noopener noreferrer"},b=r("AUR helper"),y=t('<h2 id="_3-install-asdf" tabindex="-1"><a class="header-anchor" href="#_3-install-asdf" aria-hidden="true">#</a> 3. Install asdf</h2><p>There are many different combinations of Shells, OSs &amp; Installation methods all of which affect the configuration here. Expand the selection below that best matches your system:</p><details class="custom-container details"><summary>Bash &amp; Git</summary><p>Add the following to <code>~/.bashrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Completions must be configured by adding the following to your <code>.bashrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details><details class="custom-container details"><summary>Bash &amp; Git (macOS)</summary><p>If using <strong>macOS Catalina or newer</strong>, the default shell has changed to <strong>ZSH</strong>. Unless changing back to Bash, follow the ZSH instructions.</p><p>Add the following to <code>~/.bash_profile</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Completions must be configured manually with the following entry in your <code>.bash_profile</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/completions/asdf.bash</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></details>',4),F={class:"custom-container details"},v=t('<summary>Bash &amp; Homebrew (macOS)</summary><p>If using <strong>macOS Catalina or newer</strong>, the default shell has changed to <strong>ZSH</strong>. Unless changing back to Bash, follow the ZSH instructions.</p><p>Add <code>asdf.sh</code> to your <code>~/.bash_profile</code> with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/libexec/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>\n<span class="line"></span></code></pre></div>',4),w=r("Completions will need to be "),k={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-bash",target:"_blank",rel:"noopener noreferrer"},x=r("configured as per Homebrew's instructions"),S=r(" or with the following:"),_=t('<div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/etc/bash_completion.d/asdf.bash&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.bash_profile</span></span>\n<span class="line"></span></code></pre></div>',1),H={class:"custom-container details"},D=t('<summary>Bash &amp; Pacman</summary><p>Add the following to <code>~/.bashrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),E={href:"https://wiki.archlinux.org/title/bash#Common_programs_and_options",target:"_blank",rel:"noopener noreferrer"},j=o("code",null,"bash-completion",-1),O=r(" needs to be installed for the completions to work."),z=t('<details class="custom-container details"><summary>Fish &amp; Git</summary><p>Add the following to <code>~/.config/fish/config.fish</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Completions must be configured manually with the following command:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">mkdir -p </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span><span style="color:#F92672;">;</span><span style="color:#F8F8F2;"> and ln -s </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.asdf/completions/asdf.fish </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/completions</span></span>\n<span class="line"></span></code></pre></div></details>',1),C={class:"custom-container details"},Z=t('<summary>Fish &amp; Homebrew</summary><p>Add <code>asdf.fish</code> to your <code>~/.config/fish/config.fish</code> with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\nsource &quot;</span><span style="color:#F8F8F2;">(brew --prefix asdf)</span><span style="color:#E6DB74;">&quot;/libexec/asdf.fish&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">/.config/fish/config.fish</span></span>\n<span class="line"></span></code></pre></div>',3),I=r("Completions are "),A={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-fish",target:"_blank",rel:"noopener noreferrer"},$=r("handled by Homebrew for the Fish shell"),P=r(". Friendly!"),M=t('<details class="custom-container details"><summary>Fish &amp; Pacman</summary><p>Add the following to <code>~/.config/fish/config.fish</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">source</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.fish</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Completions are automatically configured on installation by the AUR package.</p></details>',1),T={class:"custom-container details"},G=t('<summary>ZSH &amp; Git</summary><p>Add the following to <code>~/.zshrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> $HOME/.asdf/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),B=o("strong",null,"OR",-1),q=r(" use a ZSH Framework plugin like "),R={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},W=r("asdf for oh-my-zsh"),U=r(" which will source this script and setup completions."),N=t('<p>Completions are configured by either a ZSH Framework <code>asdf</code> plugin or by adding the following to your <code>.zshrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#88846F;"># append completions to fpath</span></span>\n<span class="line"><span style="color:#F8F8F2;">fpath=(${ASDF_DIR}/completions $fpath)</span></span>\n<span class="line"><span style="color:#88846F;"># initialise completions with ZSH&#39;s compinit</span></span>\n<span class="line"><span style="color:#F8F8F2;">autoload -Uz compinit </span><span style="color:#F92672;">&amp;&amp;</span><span style="color:#F8F8F2;"> compinit</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>if you are using a custom <code>compinit</code> setup, ensure <code>compinit</code> is below your sourcing of <code>asdf.sh</code></li><li>if you are using a custom <code>compinit</code> setup with a ZSH Framework, ensure <code>compinit</code> is below your sourcing of the framework</li></ul><p><strong>Warning</strong></p>',4),L=r("If you are using a ZSH Framework the associated "),V=o("code",null,"asdf",-1),Y=r(" plugin may need to be updated to use the new ZSH completions properly via "),J=o("code",null,"fpath",-1),K=r(". The Oh-My-ZSH asdf plugin is yet to be updated, see "),Q={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},X=r("ohmyzsh/ohmyzsh#8837"),ee=r("."),se={class:"custom-container details"},ae=t('<summary>ZSH &amp; Homebrew</summary><p>Add <code>asdf.sh</code> to your <code>~/.zshrc</code> with:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">echo</span><span style="color:#F8F8F2;"> -e </span><span style="color:#E6DB74;">&quot;\\n. $(brew --prefix asdf)/libexec/asdf.sh&quot;</span><span style="color:#F8F8F2;"> </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#F8F8F2;"> ${ZDOTDIR</span><span style="color:#F92672;">:-</span><span style="color:#F8F8F2;">~}/.zshrc</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),oe=o("strong",null,"OR",-1),ne=r(" use a ZSH Framework plugin like "),le={href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/asdf",target:"_blank",rel:"noopener noreferrer"},te=r("asdf for oh-my-zsh"),re=r(" which will source this script and setup completions."),ie=r("Completions are configured by either a ZSH Framework "),ce=o("code",null,"asdf",-1),de=r(" or will need to be "),pe={href:"https://docs.brew.sh/Shell-Completion#configuring-completions-in-zsh",target:"_blank",rel:"noopener noreferrer"},he=r("configured as per Homebrew's instructions"),ue=r(". If you are using a ZSH Framework the associated plugin for asdf may need to be updated to use the new ZSH completions properly via "),me=o("code",null,"fpath",-1),ge=r(". The Oh-My-ZSH asdf plugin is yet to be updated, see "),fe={href:"https://github.com/ohmyzsh/ohmyzsh/pull/8837",target:"_blank",rel:"noopener noreferrer"},be=r("ohmyzsh/ohmyzsh#8837"),ye=r("."),Fe={class:"custom-container details"},ve=t('<summary>ZSH &amp; Pacman</summary><p>Add the following to <code>~/.zshrc</code>:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#66D9EF;">.</span><span style="color:#F8F8F2;"> /opt/asdf-vm/asdf.sh</span></span>\n<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',3),we=r("Completions are placed in a ZSH friendly location, but "),ke={href:"https://wiki.archlinux.org/index.php/zsh#Command_completion",target:"_blank",rel:"noopener noreferrer"},xe=r("ZSH must be configured to use the autocompletions"),Se=r("."),_e=t('<p><code>asdf</code> scripts need to be sourced <strong>after</strong> you have set your <code>$PATH</code> and <strong>after</strong> you have sourced your framework (oh-my-zsh etc).</p><p>Restart your shell so that <code>PATH</code> changes take effect. Opening a new terminal tab will usually do it.</p><h2 id="core-installation-complete" tabindex="-1"><a class="header-anchor" href="#core-installation-complete" aria-hidden="true">#</a> Core Installation Complete!</h2><p>This completes the installation of the <code>asdf</code> core 🎉</p><p><code>asdf</code> is only useful once you install a <strong>plugin</strong>, install a <strong>tool</strong> and manage its <strong>versions</strong>. Continue the guide below to learn how to do this.</p><h2 id="_4-install-a-plugin" tabindex="-1"><a class="header-anchor" href="#_4-install-a-plugin" aria-hidden="true">#</a> 4. Install a Plugin</h2>',6),He=r("For demonstration purposes we will install & set "),De={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},Ee=r("Node.js"),je=r(" via the "),Oe={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},ze=o("code",null,"asdf-nodejs",-1),Ce=r(" plugin."),Ze=t('<h3 id="plugin-dependencies" tabindex="-1"><a class="header-anchor" href="#plugin-dependencies" aria-hidden="true">#</a> Plugin Dependencies</h3><p>Each plugin has dependencies so we need to check the plugin repo where they should be listed. For <code>asdf-nodejs</code> they are:</p><table><thead><tr><th>OS</th><th>Dependency Installation</th></tr></thead><tbody><tr><td>Linux (Debian)</td><td><code>apt-get install dirmngr gpg curl gawk</code></td></tr><tr><td>macOS</td><td><code>brew install gpg gawk</code></td></tr></tbody></table><p>We should install dependencies first as some Plugins have post-install hooks.</p><h3 id="install-the-plugin" tabindex="-1"><a class="header-anchor" href="#install-the-plugin" aria-hidden="true">#</a> Install the Plugin</h3><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git</span></span>\n<span class="line"></span></code></pre></div><h2 id="_5-install-a-version" tabindex="-1"><a class="header-anchor" href="#_5-install-a-version" aria-hidden="true">#</a> 5. Install a Version</h2><p>Now we have a plugin for Node.js we can install a version of the tool.</p><p>We can see which versions are available with <code>asdf list all nodejs</code> or a subset of versions with <code>asdf list all nodejs 14</code>.</p><p>We will just install the <code>latest</code> available version:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf install nodejs latest</span></span>\n<span class="line"></span></code></pre></div><div class="custom-container tip"><p class="custom-container-title">Note</p><p><code>asdf</code> enforces exact versions. <code>latest</code> is a helper throughout <code>asdf</code> that will resolve to the actual version number at the time of execution.</p></div><h2 id="_6-set-a-version" tabindex="-1"><a class="header-anchor" href="#_6-set-a-version" aria-hidden="true">#</a> 6. Set a Version</h2><p><code>asdf</code> performs a version lookup of a tool in all <code>.tool-versions</code> files from the current working directory up to the <code>$HOME</code> directory. The lookup occurs just-in-time when you execute a tool that <code>asdf</code> manages.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Without a version listed for a tool execution of the tool will <strong>error</strong>. <code>asdf current</code> will show you the tool &amp; version resolution, or absence of, from your current directory so you can observe which tools will fail to execute.</p></div><h3 id="global" tabindex="-1"><a class="header-anchor" href="#global" aria-hidden="true">#</a> Global</h3><p>Global defaults are managed in <code>$HOME/.tool-versions</code>. Set a global version with:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf global nodejs latest</span></span>\n<span class="line"></span></code></pre></div><p><code>$HOME/.tool-versions</code> will then look like:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',20),Ie=r("Some OSs already have tools installed that are managed by the system and not "),Ae=o("code",null,"asdf",-1),$e=r(", "),Pe=o("code",null,"python",-1),Me=r(" is a common example. You need to tell "),Te=o("code",null,"asdf",-1),Ge=r(" to pass the management back to the system. The "),Be=r("Versions reference section"),qe=r(" will guide you."),Re=t('<h3 id="local" tabindex="-1"><a class="header-anchor" href="#local" aria-hidden="true">#</a> Local</h3><p>Local versions are defined in the <code>$PWD/.tool-versions</code> file (your current working directory). Usually, this will be the Git respository for a project. When in your desired directory execute:</p><div class="language-bash ext-sh"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">asdf </span><span style="color:#F92672;">local</span><span style="color:#F8F8F2;"> nodejs latest</span></span>\n<span class="line"></span></code></pre></div><p><code>$PWD/.tool-versions</code> will then look like:</p><div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">nodejs 16.5.0\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="using-existing-tool-version-files" tabindex="-1"><a class="header-anchor" href="#using-existing-tool-version-files" aria-hidden="true">#</a> Using Existing Tool Version Files</h3><p><code>asdf</code> supports the migration from existing version files from other version managers. Eg: <code>.ruby-version</code> for the case of <code>rbenv</code>. This is supported on a per-plugin basis.</p>',7),We={href:"https://github.com/asdf-vm/asdf-nodejs/",target:"_blank",rel:"noopener noreferrer"},Ue=o("code",null,"asdf-nodejs",-1),Ne=r(" supports this via both "),Le=o("code",null,".nvmrc",-1),Ve=r(" and "),Ye=o("code",null,".node-version",-1),Je=r(" files. To enable this, add the following to your "),Ke=o("code",null,"asdf",-1),Qe=r(" configuration file "),Xe=o("code",null,"$HOME/.asdfrc",-1),es=r(":"),ss=t('<div class="language-text ext-text line-numbers-mode"><pre class="shiki" style="background-color:#272822;"><code><span class="line"><span style="color:#F8F8F2;">legacy_version_file = yes\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1),as=r("See the "),os=r("configuration"),ns=r(" reference page for more config options."),ls=t('<h2 id="guide-complete" tabindex="-1"><a class="header-anchor" href="#guide-complete" aria-hidden="true">#</a> Guide Complete!</h2><p>That completes the Getting Started guide for <code>asdf</code> 🎉 You can now manage <code>nodejs</code> versions for your project. Follow similar steps for each type of tool in your project!</p><p><code>asdf</code> has many more commands to become familiar with, you can see them all by running <code>asdf --help</code> or <code>asdf</code>. The core of the commands are broken into three categories:</p>',3),ts=r("core "),rs=o("code",null,"asdf",-1),is=r("plugins"),cs=r("versions (of tools)");i.render=function(t,r){const i=e("OutboundLink"),ds=e("RouterLink");return s(),a(l,null,[c,o("table",null,[d,o("tbody",null,[p,h,o("tr",null,[u,o("td",null,[m,g,o("a",f,[b,o(i)])])])])]),y,o("details",F,[v,o("p",null,[w,o("a",k,[x,o(i)]),S]),_]),o("details",H,[D,o("p",null,[o("a",E,[j,o(i)]),O])]),z,o("details",C,[Z,o("p",null,[I,o("a",A,[$,o(i)]),P])]),M,o("details",T,[G,o("p",null,[B,q,o("a",R,[W,o(i)]),U]),N,o("p",null,[L,V,Y,J,K,o("a",Q,[X,o(i)]),ee])]),o("details",se,[ae,o("p",null,[oe,ne,o("a",le,[te,o(i)]),re]),o("p",null,[ie,ce,de,o("a",pe,[he,o(i)]),ue,me,ge,o("a",fe,[be,o(i)]),ye])]),o("details",Fe,[ve,o("p",null,[we,o("a",ke,[xe,o(i)]),Se])]),_e,o("p",null,[He,o("a",De,[Ee,o(i)]),je,o("a",Oe,[ze,o(i)]),Ce]),Ze,o("p",null,[Ie,Ae,$e,Pe,Me,Te,Ge,o(ds,{to:"/manage/versions.html"},{default:n((()=>[Be])),_:1}),qe]),Re,o("p",null,[o("a",We,[Ue,o(i)]),Ne,Le,Ve,Ye,Je,Ke,Qe,Xe,es]),ss,o("p",null,[as,o(ds,{to:"/manage/configuration.html"},{default:n((()=>[os])),_:1}),ns]),ls,o("ul",null,[o("li",null,[o(ds,{to:"/manage/core.html"},{default:n((()=>[ts,rs])),_:1})]),o("li",null,[o(ds,{to:"/manage/plugins.html"},{default:n((()=>[is])),_:1})]),o("li",null,[o(ds,{to:"/manage/versions.html"},{default:n((()=>[cs])),_:1})])])],64)};export default i;
