"use strict";

let fs = require('fs');
let _ = require('lodash');
let sass = require('node-sass');
let async = require('async');


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

async.series([
    (cb) => {
        console.log('Writing variables');
        _.forOwn(units, (v, k) => {
            let str = `
            $${k}: ${v};
            `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing margin helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-margin-${k} {
        margin: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing margin vertical helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-margin-v-${k} {
        margin-top: $${k} !important;
        margin-bottom: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing margin horizontal helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-margin-h-${k} {
        margin-left: $${k} !important;
        margin-right: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing margin top helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-margin-top-${k} {
        margin-top: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing margin bottom helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-margin-bottom-${k} {
        margin-bottom: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing margin left helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-margin-left-${k} {
        margin-left: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing margin right helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-margin-right-${k} {
        margin-right: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writingspacer h helpers');
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
        cb(null);
    },
    (cb) => {
        console.log('Writing spacer v helpers');
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
        cb(null);
    },
    (cb) => {
        console.log('Writing padding helpers');


        _.forOwn(units, (v, k) => {
            let str = `
    .helper-padding-${k} {
        padding: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing padding v helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-padding-v-${k} {
        padding-top: $${k} !important;
        padding-bottom: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing padding h helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-padding-h-${k} {
        padding-left: $${k} !important;
        padding-right: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing padding top helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-padding-top-${k} {
        padding-top: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing padding bottom helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-padding-bottom-${k} {
        padding-bottom: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing padding left helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-padding-left-${k} {
        padding-left: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing padding right helpers');
        _.forOwn(units, (v, k) => {
            let str = `
    .helper-padding-right-${k} {
        padding-right: $${k} !important;
    }

    `;
            _classes.push(str);
        });
        cb(null);
    },
    (cb) => {
        console.log('Writing scss partial helpers');
        let file = fs.createWriteStream('./scss/_lazy-helpers.scss');

        file.on('error', (err) => console.log(err));

        for (let i = 0; i < _classes.length; i++) {
            file.write(_classes[i]);
            if (i === _classes.length) {
                file.write(misc);
                file.end();
                console.log('scss partial written succesfully');
            }
        }


        cb(null);
    },
    (cb) => {
        console.log('Writing scss file');
        let file2 = fs.createWriteStream('./scss/lazy-helpers.scss');

        file2.on('error', (err) => console.log(err));

        for (let i = 0; i < _classes.length; i++) {
            file2.write(_classes[i]);
            if (i === _classes.length) {
                file2.write(misc);
                file2.end();
                console.log('scss file written succesfully');
            }
        }


        cb(null);
    },
    (cb) => {
        console.log('compiling scss to css');
        setTimeout(() => {
            fs.readFile('./scss/lazy-helpers.scss', 'utf-8', (err, data) => {
                sass.render({
                    data: data
                }, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    fs.writeFileSync('./css/lazy-helpers.css', result.css);
                    console.log('scss compiled succesfully');
                });
            });
        }, 5000);

        cb(null);
    },
    (cb) => {
        setTimeout(() => {
            console.log('Compiling minified scss to css');
            fs.readFile('./scss/lazy-helpers.scss', 'utf-8', (err, data) => {
                sass.render({
                    data: data,
                    outputStyle: 'compressed'
                }, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                    fs.writeFileSync('./css/lazy-helpers.min.css', result.css);
                    console.log('scss compiled to minified css succesfully');
                });
            });




        }, 5000);

        cb(null);
    }
]);