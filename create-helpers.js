"use strict";

let fs = require('fs');
let _ = require('lodash');


let units = {
    xs: '5px',
    "xs-xs": '10px',
    sm: '15px',
    "sm-xs": '20px',
    "sm-xs-xs": '25px',
    md: '30px',
    "md-xs": '35px',
    "md-xs-xs": '40px',
    "md-sm": '45px',
    lg: '60px',
    "lg-sm": "75px",
    "lg-md": '90px',
    xl: '120px',
    jumbo: '150px'
};

let _classes = [];
let _vars = [];

let misc = `
.hand {
    cursor: pointer !important;
}
.vcenter {
    display: inline-block;
    vertical-align: middle;
}
.helper-no-padding {
    padding: 0 !important;
}
.helper-no-margin {
    margin: 0 !important;
}
.helper-no-padding-left {
    padding-left: 0 !important;
}
.helper-no-padding-right {
    padding-right: 0 !important;
}
.helper-no-padding-top {
    padding-top: 0 !important;
}
.helper-no-padding-bottom {
    padding-bottom: 0 !important;
}
.helper-no-margin-left {
    margin-left: 0 !important;
}
.helper-no-margin-right {
    margin-right: 0 !important;
}
.helper-no-margin-top {
    margin-top: 0 !important;
}
.helper-no-margin-bottom {
    margin-bottom: 0 !important;
}
.vcenter {
    display: inline-block;
    vertical-align: middle;
}
`;

_.forOwn(units, (v, k) => {
    let str = `$${k}: ${v};`;
    _vars.push(str);
});

//margin


_.forOwn(units, (v, k) => {
    let str = `
    .helper-margin-${k} {
        margin: $${k} !important;
    }

    `;
    _classes.push(str);
});

//margin vertical
_.forOwn(units, (v, k) => {
    let str = `
    .helper-margin-v-${k} {
        margin-top: $${k} !important;
        margin-bottom: $${k} !important;
    }

    `;
    _classes.push(str);
});

//margin horiztonal
_.forOwn(units, (v, k) => {
    let str = `
    .helper-margin-h-${k} {
        margin-left: $${k} !important;
        margin-right: $${k} !important;
    }

    `;
    _classes.push(str);
});

//margin top
_.forOwn(units, (v, k) => {
    let str = `
    .helper-margin-top-${k} {
        margin-top: $${k} !important;
    }

    `;
    _classes.push(str);
});

//margin bottom
_.forOwn(units, (v, k) => {
    let str = `
    .helper-margin-bottom-${k} {
        margin-bottom: $${k} !important;
    }

    `;
    _classes.push(str);
});

//margin left
_.forOwn(units, (v, k) => {
    let str = `
    .helper-margin-left-${k} {
        margin-left: $${k} !important;
    }

    `;
    _classes.push(str);
});

//margin right
_.forOwn(units, (v, k) => {
    let str = `
    .helper-margin-right-${k} {
        margin-right: $${k} !important;
    }

    `;
    _classes.push(str);
});

//spacer h
_.forOwn(units, (v, k) => {
    let str = `
    .helper-spacer-h-${k} {
        margin-right: $${k} !important;
        margin-left: $${k} !important;
        display: block;
    }

    `;
    _classes.push(str);
});

//spacer h
_.forOwn(units, (v, k) => {
    let str = `
    .helper-spacer-v-${k} {
        margin-top: $${k} !important;
        margin-bottom: $${k} !important;
        display: block;
    }

    `;
    _classes.push(str);
});

//padding


_.forOwn(units, (v, k) => {
    let str = `
    .helper-padding-${k} {
        padding: $${k} !important;
    }

    `;
    _classes.push(str);
});

//padding vertical
_.forOwn(units, (v, k) => {
    let str = `
    .helper-padding-v-${k} {
        padding-top: $${k} !important;
        padding-bottom: $${k} !important;
    }

    `;
    _classes.push(str);
});

//padding horiztonal
_.forOwn(units, (v, k) => {
    let str = `
    .helper-padding-h-${k} {
        padding-left: $${k} !important;
        padding-right: $${k} !important;
    }

    `;
    _classes.push(str);
});

//padding top
_.forOwn(units, (v, k) => {
    let str = `
    .helper-padding-top-${k} {
        padding-top: $${k} !important;
    }

    `;
    _classes.push(str);
});

//padding bottom
_.forOwn(units, (v, k) => {
    let str = `
    .helper-padding-bottom-${k} {
        padding-bottom: $${k} !important;
    }

    `;
    _classes.push(str);
});

//padding left
_.forOwn(units, (v, k) => {
    let str = `
    .helper-padding-left-${k} {
        padding-left: $${k} !important;
    }

    `;
    _classes.push(str);
});

//padding right
_.forOwn(units, (v, k) => {
    let str = `
    .helper-padding-right-${k} {
        padding-right: $${k} !important;
    }

    `;
    _classes.push(str);
});

let file = fs.createWriteStream('_helpers.scss');

file.on('error', (err) => console.log(err));

_.forEach(_classes, (r) => file.write(r))
file.write(misc);
file.end();