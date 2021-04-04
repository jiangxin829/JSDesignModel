import ModalFactory from './factory.js'
    ; (() => {
        const oModal = document.getElementsByClassName('modal')[0];
        const oBtnGroup = document.getElementsByClassName('btn-group')[0];
        const modalFactory = new ModalFactory(oModal);

        const init = () => {
            bindEvent()
        }

        function bindEvent() {
            oBtnGroup.addEventListener('click', (e) => {
                const tar = e.target;
                if (tar.tagName.toLowerCase() === 'button') {
                    const modal = modalFactory.create('这是标题', tar.dataset.status);
                    switch (tar.dataset.status) {
                        case 'W':
                            modal.outputInfo('这是一个告警提示');
                            break;
                        case 'E':
                            modal.outputInfo('这是一个失败提示');
                            break;
                        default:
                            break;
                    }
                }
            }, false)
        }

        init();
    })()