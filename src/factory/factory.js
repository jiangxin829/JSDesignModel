import { ModalType, ModalClassName } from './modalType.js'

class Modal {
    constructor(status) {
        this.status = status;
    }

    get className() {
        let classStr = 'modal';
        switch (this.status) {
            case ModalType.SUCCESS:
                classStr += ' ' + ModalClassName.SUCCESS;
                break;
            case ModalType.WARNING:
                classStr += ' ' + ModalClassName.WARNING;
                break;
            case ModalType.ERROR:
                classStr += ' ' + ModalClassName.ERROR;
                break;
            default:
                break;
        }
        return classStr;
    }

    static checkStatus(status) {
        for (let k in ModalType) {
            if (ModalType[k] === status)
                return true;
        }
        return false;
    }

    static outputInfo(info) {
        console.log(info);
    }
}

class SuccessModal extends Modal {
    constructor(title) {
        super(ModalType.SUCCESS);
        this.title = '成功：' + title;
    }
}

class WarningModal extends Modal {
    constructor(title) {
        super(ModalType.WARNING);
        this.title = '告警：' + title;
    }

    outputInfo(info) {
        Modal.outputInfo('告警提示：' + info);
    }
}

class ErrorModal extends Modal {
    constructor(title) {
        super(ModalType.ERROR);
        this.title = '失败：' + title;
    }

    outputInfo(info) {
        Modal.outputInfo('失败提示：' + info);
    }
}

class ModalFactory {
    constructor(dom) {
        this.dom = dom;
    }

    create(title, status) {
        const checkStatus = Modal.checkStatus(status);

        if (!checkStatus) {
            throw new Error('Modal type is incorrect!');
        }

        const dom = this.dom;
        let modal = null;

        switch (status) {
            case ModalType.SUCCESS:
                modal = new SuccessModal(title);
                break;
            case ModalType.WARNING:
                modal = new WarningModal(title);
                break;
            case ModalType.ERROR:
                modal = new ErrorModal(title);
                break;
            default:
                break;
        }
        dom.getElementsByTagName('header')[0].innerText = modal.title;
        dom.className = modal.className;

        return { outputInfo: modal.outputInfo };
    }
}

export default ModalFactory;