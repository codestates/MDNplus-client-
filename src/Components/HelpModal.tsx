import React from 'react';
import {Message, ModalBox, ModalContainer} from "../styled-components/ConfirmModal"


const HelpModal = () => {
    return (
        <ModalContainer>
      <ModalBox>
        <Message>마크다운 사용법</Message>
      </ModalBox>
    </ModalContainer>
    )
}

export default HelpModal;