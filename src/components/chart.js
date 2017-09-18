import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
    if (!Array.isArray(data)) {
        throw new Error('Please provide data in the form of an array of numbers!');
    }

    if (!data.length) {
        throw new Error('Please provide data with atleast one record!');
    }

    let sum = 0;
    data.forEach(num => sum += num);

    return sum / data.length;
}

export default (props) => {
    return (
        <div>
            <Sparklines data={props.data} height={120} width={180}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>Average({props.metric}): {average(props.data)}</div>
        </div>
    );
};

