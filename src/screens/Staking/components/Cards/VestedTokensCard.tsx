import React from 'react';
import { useTranslation } from 'react-i18next';

import assets from 'assets';
import { Card } from 'frontend-elements';
import { Vestings } from 'models';
import { dateToNow, NumbersUtils } from 'utils';
import { SmallerDecimal } from 'components';

const VestedTokensCard = ({ vestings }: { vestings: Vestings }): JSX.Element => {
    const { t } = useTranslation();

    return (
        <Card withoutPadding className="h-100 dashboard-card justify-content-start vested-tokens-card p-4">
            <h2 className="ps-2 pt-3 text-white">{t('staking.vestedTokens')}</h2>
            <div className="ps-2 my-3 d-flex flex-row align-items-baseline w-100">
                <div className="me-2 me-sm-3 text-white text-truncate">
                    <SmallerDecimal nb={NumbersUtils.formatUnit(vestings.lockedCoins, true)} big />
                </div>
                <img src={assets.images.lumTicker} className="ticker" />
            </div>
            <p className="align-self-end text-white">
                {t('staking.timeRemaining', { time: dateToNow(vestings.endsAt) })}
            </p>
        </Card>
    );
};

export default VestedTokensCard;
