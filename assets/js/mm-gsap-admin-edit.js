(function(wp) {
    var registerPlugin = wp.plugins.registerPlugin;
    var PluginDocumentSettingPanel = wp.editPost.PluginDocumentSettingPanel;
    var el = wp.element.createElement;

    var MyDocumentSettingPanel = function() {
        return el(
            PluginDocumentSettingPanel,
            {
                name: 'mm-gsap-panel',
                title: 'Lista classi animazioni GSAP',
                className: 'mm-gsap-panel',
            },
            el('p', null, 'ciao')
        );
    };

    registerPlugin('mm-gsap-panel', {
        render: MyDocumentSettingPanel,
    });
})(window.wp);
