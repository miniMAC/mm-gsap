(function(wp) {
    const { registerPlugin } = wp.plugins;
    const { PluginDocumentSettingPanel } = wp.editPost;
    const { createElement: el, Fragment, useState } = wp.element;
    const { Button, SnackbarList } = wp.components;
    const { useDispatch } = wp.data;

    const MyDocumentSettingPanel = () => {
        const [notice, setNotice] = useState('');
        const { createNotice } = useDispatch('core/notices');

        // Funzione per copiare il testo negli appunti
        const copyToClipboard = (text) => {
            const tempInput = document.createElement('input');
            tempInput.style.position = 'absolute';
            tempInput.style.left = '-9999px';
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
            createNotice(
                'success',
                `Testo copiato: ${text}`,
                {
                    isDismissible: true,
                    type: 'snackbar',
                }
            );
        };

        return el(
            Fragment,
            null,
            el(
                PluginDocumentSettingPanel,
                {
                    name: 'mm-gsap-panel',
                    title: 'Lista classi animazioni GSAP',
                    className: 'mm-gsap-panel',
                },
                el(
                    'div',
                    null,
                    el(
                        Button,
                        {
                            isSecondary: true,
                            onClick: () => { copyToClipboard('mm-gsap-testo-1'); }
                        },
                        'mm-gsap-testo-1'
                    ),
                    el(
                        Button,
                        {
                            isSecondary: true,
                            onClick: () => { copyToClipboard('mm-gsap-testo-2'); }
                        },
                        'mm-gsap-testo-2'
                    )
                )
            )
        );
    };

    registerPlugin('mm-gsap-panel', {
        render: MyDocumentSettingPanel,
    });
})(window.wp);
