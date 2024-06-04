(function(wp) {
    const { registerPlugin } = wp.plugins;
    const { PluginDocumentSettingPanel } = wp.editPost;
    const { createElement: el, Fragment, useState } = wp.element;
    const { Button, SnackbarList } = wp.components;
    const { useDispatch } = wp.data;

    // Aggiungi stile CSS per il tooltip
    const style = document.createElement('style');
    style.innerHTML = `
        .tooltip {
            position: relative;
            display: inline-block;
        }
        
        .tooltip .tooltiptext {
            visibility: hidden;
            width: 280px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 1;
            bottom: 140%;
            left: 0;
            margin-left: -10px;
            opacity: 0;
            transition: opacity 0.3s;
        }
        
        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }
        
        .tooltiptext img {
            width: 280px;
            height: auto;
        }
    `;
    document.head.appendChild(style);

    const TooltipButton = ({ text, imgSrc, imgAlt }) => (
        el(
            'div',
            { className: 'tooltip' },
            el(
                Button,
                {
                    isSecondary: true,
                    onClick: () => { copyToClipboard(text); }
                },
                text
            ),
            el(
                'span',
                { className: 'tooltiptext' },
                el('img', { src: imgSrc, alt: imgAlt })
            )
        )
    );

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
                    el(TooltipButton, {
                        text: 'mm-gsap-testo-1',
                        imgSrc: mm_gsap.mm_gsap_plugin_path + '/assets/animazioni/mm-gsap-testo-1.gif',
                        imgAlt: 'Animation 1'
                    }),
                    el(TooltipButton, {
                        text: 'mm-gsap-testo-2',
                        imgSrc: mm_gsap.mm_gsap_plugin_path + '/assets/animazioni/mm-gsap-testo-2.gif',
                        imgAlt: 'Animation 2'
                    })
                )
            )
        );
    };

    registerPlugin('mm-gsap-panel', {
        render: MyDocumentSettingPanel,
    });
})(window.wp);
