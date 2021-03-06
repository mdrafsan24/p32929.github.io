import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useOvermind} from "../../../../Others/OvermindHelper";
import {getTextAndListGrid} from "../../../../Others/GlobalMethods";
import {contactInfos} from "../../../../Others/GlobalVariables";

const ContactRoute = () => {
    const {state, actions} = useOvermind()

    return (
        <Grid spacing={1} container xs item direction='row'>
            {
                contactInfos.map((item) => {
                    return getTextAndListGrid(item, state.belowSm ? 90 : 80);
                })
            }
        </Grid>
    );
};

export default ContactRoute;
