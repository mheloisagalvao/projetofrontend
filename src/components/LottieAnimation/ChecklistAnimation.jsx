import React from "react";
import Lottie from 'lottie-web';

import ChecklistAnimationJson from '../../assets/LottieJson/checklist.json';

export const ChecklistAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ChecklistAnimationJson
    }

    return <Lottie options={defaultOptions} width={450} height={450} />
}