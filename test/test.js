function return_string_array() {
    const _0x44cecb = [
        "DisplayNames",
        "function",
        "fromCodePoint",
        "WINDOW",
        "brands",
        "model",
        "RelativeTimeFormat",
        "48DttPaQ",
        "start",
        "warn",
        "push",
        "UNMASKED_RENDERER_WEBGL",
        "(((.+)+)+)+$",
        "ReportingObserver",
        "8iScQsY",
        "error",
        "value",
        "userAgentData",
        "currency",
        "done",
        "now",
        "exception",
        "search",
        "getMonth",
        "{}.constructor(\x22return\x20this\x22)(\x20)",
        "toLocaleString",
        "1207989AYvnuK",
        "navigator",
        "8741612lxMbKO",
        "OTHER",
        "ListFormat",
        "7591600zpsSsP",
        "LINUX",
        "filter",
        "location",
        "keyboard",
        "49xKYWDv",
        "mobile",
        "WORKER",
        "toString",
        "Collator",
        "getHighEntropyValues",
        "bind",
        "uaFullVersion",
        "ports",
        "bitness",
        "815946FVxkin",
        "getContext",
        "resolvedOptions",
        "__proto__",
        "reduce",
        "NumberFormat",
        "length",
        "connect",
        "APPLE",
        "return\x20(function()\x20",
        "source",
        "2008GFhMki",
        "parse",
        "brandsVersion",
        "proxy\x20behavior\x20detected",
        "stop",
        "match",
        "DateTimeFormat",
        "info",
        "Windows",
        "split",
        "flat",
        "24FkTBwQ",
        "platform",
        "PluralRules",
        "postMessage",
        "556184bKvOvq",
        "prototype",
        "constructor",
        "catch",
        "trace",
        "1675ZxzQOm",
        "version",
        "console",
        "getDate",
        "then",
        "Other",
        "keys",
        "sort",
        "join",
        "getParameter",
        "apply",
        "WINDOWS",
        "message",
        "throw",
        "brand",
        "test",
        "next",
        "ServiceWorkerGlobalScope",
        "platformVersion",
        "document",
        "webgl",
        "571416GOdsZs",
        "WEBGL_debug_renderer_info",
        "table",
        "name",
        "getExtension",
        "USD",
        "toFixed",
    ];
    return _0x44cecb;
}
const a1_0xbb9841 = (function () {
        let _0x2d3742 = !![]; //////////////////
        return function (_0x3032bf, _0x1fe55a) {
            const _0x445530 = _0x2d3742
                ? function () {

                }
                : function () {};
            return (_0x2d3742 = ![]), _0x445530;
        };
    })(),
    a1_0x18f91d = a1_0xbb9841(this, function () { // 1CROP

    });

console.log('breakpoint');
function a1_0x830c(_0x26cdd3, _0x1dedbf) {
    const _0x2fa651 = return_string_array();
    return (
        (a1_0x830c = function (_0x564f5d, _0xaf9df2) {
            _0x564f5d = _0x564f5d - (0x1d4d + -0x1a1c + -0x153);
            let _0x830ca6 = _0x2fa651[_0x564f5d];
            console.log('check');
            return _0x830ca6;
        }),
            a1_0x830c(_0x26cdd3, _0x1dedbf)
    );
}
a1_0x18f91d(),
    (() => {
        "use strict";
        const isWorker =
            typeof WorkerGlobalScope !== 'undefined',
            _0x4f1292 = (function () {
                try {
                    const num = (-231 * -25 + 3793 * 1 + -661 * -3); // This results in 804
                    num.toFixed(); // This will work without throwing an error
                    return true;
                } catch (err) {
                    return false
                }
            })(),
            boolInIsWorker = -0xfd6 * -0x1 + 0x1 * -0x1136 + 0xd8 * 0x2 == _0x4f1292;
        const { userAgent, platform } = {};

        const [deviceType, osType] = (function detectDeviceAndOS(userAgent, platform) {
            const SYSTEM_TYPES = {
                WINDOWS: "Windows",
                ANDROID: "Android/Linux",
                APPLE: "Apple",
                UNKNOWN: "Unknown"
            };
            const detectSystemType = (input) => {
                if (/win(dows|16|32|64|95|98|nt)|wow64/i.test(input)) {
                    return SYSTEM_TYPES.WINDOWS;
                }
                if (/android|linux|cros/i.test(input)) {
                    return SYSTEM_TYPES.ANDROID;
                }
                if (/(i(os|p(ad|hone|od)))|mac/i.test(input)) {
                    return SYSTEM_TYPES.APPLE;
                }
                return SYSTEM_TYPES.UNKNOWN;
            };


            const deviceType = detectSystemType(userAgent);
            if (!platform) {
                return [deviceType];
            }

            const osType = detectSystemType(platform);

            return [deviceType, osType];
        })(userAgent, platform);
        const testLogger = (() => {
                const logData = {};
                let totalTime = 0;
                return {
                    logTestResult: ({
                                        test: _0x4c83d4,
                                        passed: _0xcc7ab2,
                                        time = 0,
                                    }) => {
                        totalTime += time;
                        logData[test] = `${time}ms`;
                        return true
                    },
                    getLog: () => logData,
                    getTotal: () => totalTime,
                };
            })(),
            { logTestResult } = testLogger;
            const delayedAction = (action, delay = 0) => {
                action.start();
                return new Promise((resolve) => {
                    setTimeout(
                        () => resolve(action.end()), delay);
                }).catch(() => {
                });
            };
        const trashBin = (() => {
                const bin = [];
                return {
                    getBin: () => bin,
                    sendToTrash: (
                        name,
                        value,
                        returnValue = undefined
                    ) => {
                        const processedValue = typeof value === 'function'
                                ? 'function'
                                : value;
                        bin.push({name, value: processedValue});
                        return returnValue
                    },
                };
            })(),
            { sendToTrash: _0x25783 } = trashBin;

        var _0x55d56b,
            asyncRunner = function (generatorFunc, args, PromiseImplementation = Promise) {
                return new PromiseImplementation((resolve, reject) => {
                    const iterator = generatorFunc.apply(null, args || []);
                    function handleNextStep(step) {
                        try {
                            if (step.done) {
                                resolve(step.value);
                            } else {
                                PromiseImplementation.resolve(step.value).then(
                                    (result) => handleNextStep(iterator.next(result)),
                                    (error) => handleNextStep(iterator.throw(error))
                                );
                            }
                        } catch (error) {
                            reject(error);
                        }
                    }
                    handleNextStep(iterator.next());
                });
            };
        function _0x157db6() {
            return asyncRunner(
                this,
                void (0x1838 + 0x14dc + -0x2d14),
                void (0x6 * -0x563 + -0xdfa + -0x2 * -0x1726),
                function* () {
                    const _0x273c2f = (_0x32e916) =>
                            asyncRunner(
                                this,
                                void (0x7d4 + -0x2567 + 0x1d93),
                                void (-0x1262 + 0x25c3 + 0x1c3 * -0xb),
                                function* () {
                                    if (!(_0xe0e053(-0xf5, -0xc4) in _0x32e916)) return;
                                    const _0x25e7f7 = yield _0x32e916[_0xe0e053(-0xa7, -0xc4)][
                                            _0xe0e053(-0xfe, -0x115)
                                            ]([
                                            _0xe0e053(-0x112, -0xf9),
                                            _0xe0e053(-0xda, -0xdf),
                                            "architecture",
                                            _0xe0e053(-0x13f, -0x111),
                                            _0xe0e053(-0xef, -0xd0),
                                            _0xe0e053(-0x126, -0x113),
                                        ]),
                                        { brands: _0x269105, mobile: _0x27635e } =
                                        _0x32e916[_0xe0e053(-0xc7, -0xc4)] || {},
                                        _0x16956b = (
                                            _0x5200c2,
                                            _0x488c6c = !(0x218e + -0x2656 * -0x1 + -0x689 * 0xb),
                                        ) =>
                                            _0x5200c2[_0xe0e053(-0x9e, -0xb4)](
                                                (_0x4c20fe) =>
                                                    !/Not/[_0xe0e053(-0x102, -0xe2)](
                                                        _0x4c20fe[_0xe0e053(-0x105, -0xe3)],
                                                    ),
                                            )["map"](
                                                (_0x2ca0eb) =>
                                                    "" +
                                                    _0x2ca0eb[_0xe0e053(-0xd1, -0xe3)] +
                                                    (_0x488c6c
                                                        ? "\x20" + _0x2ca0eb[_0xe0e053(-0xce, -0xf0)]
                                                        : ""),
                                            ),
                                        _0x1e7cea = (_0x4bbd6c) =>
                                            _0x4bbd6c[_0xe0e053(-0x131, -0x10a)] >
                                            -0x1a60 + 0x79 * -0x1 + 0x1ada * 0x1
                                                ? _0x4bbd6c[_0xe0e053(-0x9b, -0xb4)](
                                                    (_0x33442a) =>
                                                        !/Chromium/[_0xe0e053(-0xcf, -0xe2)](_0x33442a),
                                                )
                                                : _0x4bbd6c;
                                    function _0xe0e053(_0x105653, _0x5a49ce) {
                                        return a1_0x830c(_0x5a49ce - -0x2fa, _0x105653);
                                    }
                                    return (
                                        _0x25e7f7[_0xe0e053(-0xc1, -0xd1)] ||
                                        (_0x25e7f7[_0xe0e053(-0xf8, -0xd1)] = _0x269105),
                                            (_0x25e7f7[_0xe0e053(-0xd1, -0x103)] = _0x16956b(
                                                _0x25e7f7[_0xe0e053(-0xd3, -0xd1)],
                                                !(0x172c + -0x2a1 + 0x3 * -0x6d9),
                                            )),
                                            (_0x25e7f7[_0xe0e053(-0x103, -0xd1)] = _0x16956b(
                                                _0x25e7f7["brands"],
                                            )),
                                            (_0x25e7f7[_0xe0e053(-0x123, -0x103)] = _0x1e7cea(
                                                _0x25e7f7["brandsVersion"],
                                            )),
                                            (_0x25e7f7[_0xe0e053(-0xb2, -0xd1)] = _0x1e7cea(
                                                _0x25e7f7[_0xe0e053(-0xb4, -0xd1)],
                                            )),
                                        _0x25e7f7[_0xe0e053(-0xfa, -0x119)] ||
                                        (_0x25e7f7[_0xe0e053(-0x118, -0x119)] = _0x27635e),
                                            Object[_0xe0e053(-0x107, -0xeb)](_0x25e7f7)
                                                [_0xe0e053(-0xbb, -0xea)]()
                                                [_0xe0e053(-0xe2, -0x10c)](
                                                (_0x2e85ec, _0x4c3610) => (
                                                    (_0x2e85ec[_0x4c3610] = _0x25e7f7[_0x4c3610]),
                                                        _0x2e85ec
                                                ),
                                                {},
                                            )
                                    );
                                },
                            ),
                        _0x5342af = () =>
                            asyncRunner(
                                this,
                                void (0x15d * 0x4 + -0x1 * 0x87f + 0x1 * 0x30b),
                                void (0x7 * -0x361 + 0x6 * 0x5f2 + -0xc05),
                                function* () {
                                    const _0x52730b = (() => {
                                        let _0x1c871c = -0x3 * -0xde + 0x163d + 0x1 * -0x18d7;
                                        const _0x1681f7 = [];
                                        function _0x403833(_0x505d8f, _0x581b90) {
                                            return a1_0x830c(_0x581b90 - 0xc7, _0x505d8f);
                                        }
                                        return {
                                            stop: () =>
                                                _0x1c871c
                                                    ? (_0x1681f7["push"](
                                                        performance[_0x403833(0x2f5, 0x300)]() -
                                                        _0x1c871c,
                                                    ),
                                                    _0x1681f7[_0x403833(0x2d7, 0x2b5)](
                                                        (_0x1c61cc, _0x26f608) => _0x1c61cc + _0x26f608,
                                                        0x32b + 0xe61 + -0x118c,
                                                    )["toFixed"](0x1ea0 + 0x13 * 0x92 + 0x2974 * -0x1) +
                                                    "ms")
                                                    : _0x1c871c,
                                            start: () => (
                                                (_0x1c871c = performance[_0x403833(0x2df, 0x300)]()),
                                                    _0x1c871c
                                            ),
                                        };
                                    })();
                                    yield delayedAction(_0x52730b);
                                    function _0x311e98(_0x92a4ee, _0x533384) {
                                        return a1_0x830c(_0x92a4ee - -0x235, _0x533384);
                                    }
                                    const _0x5a1fa7 = yield _0x273c2f(navigator)[
                                            _0x311e98(-0x2e, -0x52)
                                            ]((_0x244fd6) => console["error"](_0x244fd6)),
                                        { webglVendor: _0x4cd96c, webglRenderer: _0x3bd99b } =
                                        ((_0x20f451) => {
                                            try {
                                                return (() => {
                                                    const _0x57fc75 = new OffscreenCanvas(
                                                            0x1a30 + -0x10b3 + 0x29 * -0x35,
                                                            0x173c * 0x1 + 0x127 * -0x1f + 0x3 * 0x47f,
                                                        )[_0x2c8da6(0x4a6, 0x48b)](
                                                            _0x2c8da6(0x4d8, 0x4c0),
                                                        ),
                                                        _0x51ac4e = _0x57fc75[_0x2c8da6(0x4dd, 0x4d5)](
                                                            _0x2c8da6(0x4da, 0x4fb),
                                                        );
                                                    function _0x2c8da6(_0x22663c, _0x5203d9) {
                                                        return a1_0x830c(_0x22663c - 0x2bb, _0x5203d9);
                                                    }
                                                    return {
                                                        webglVendor: _0x57fc75["getParameter"](
                                                            _0x51ac4e["UNMASKED_VENDOR_WEBGL"],
                                                        ),
                                                        webglRenderer: _0x57fc75[_0x2c8da6(0x4cd, 0x4a5)](
                                                            _0x51ac4e[_0x2c8da6(0x4eb, 0x4c3)],
                                                        ),
                                                    };
                                                })();
                                            } catch (_0x27c008) {
                                                return;
                                            }
                                        })() || {},
                                        _0x1ca17e = (() => {
                                            function _0x4793c5(_0x210a46, _0x5309b1) {
                                                return _0x311e98(_0x5309b1 - 0x54c, _0x210a46);
                                            }
                                            const _0x3fa7cf = new Date()[_0x4793c5(0x507, 0x523)](),
                                                _0x58fd6c = new Date()[_0x4793c5(0x57f, 0x553)](),
                                                _0x10b078 = Date()[_0x4793c5(0x545, 0x515)]` `[
                                                0x19 * 0xdf + 0x3 * 0xafd + -0x36bb
                                                    ],
                                                _0x163cd9 = (_0x101018) =>
                                                    -0x1c64 + 0x665 * 0x1 + -0x40 * -0x58 ==
                                                    ("" + _0x101018)[_0x4793c5(0x4da, 0x507)]
                                                        ? "0" + _0x101018
                                                        : _0x101018,
                                                _0x48466e =
                                                    _0x58fd6c +
                                                    (-0x1ae7 * -0x1 + -0x1bf * -0x4 + -0x21e2) +
                                                    "/" +
                                                    _0x163cd9(_0x3fa7cf) +
                                                    "/" +
                                                    _0x10b078,
                                                _0x591b51 =
                                                    _0x10b078 +
                                                    "-" +
                                                    _0x163cd9(
                                                        _0x58fd6c +
                                                        (-0x17 * 0x52 + -0x1069 * -0x1 + 0x1a * -0x59),
                                                    ) +
                                                    "-" +
                                                    _0x163cd9(_0x3fa7cf);
                                            return +((Date[_0x4793c5(0x502, 0x50d)](
                                                        new Date(_0x48466e),
                                                    ) -
                                                    +new Date(_0x591b51)) /
                                                (-0x1203c + 0x1177 + -0x59 * -0x5ad))["toFixed"](
                                                -0x642 + 0xda3 * -0x2 + 0x2188,
                                            );
                                        })(),
                                        _0x43c6cc =
                                            Intl[_0x311e98(-0x3a, -0x36)]()[
                                                _0x311e98(-0x49, -0x45)
                                                ]()["timeZone"],
                                        _0x54efd2 = (() => {
                                            const _0x2d17fa = [
                                                _0x128cc5(0x396, 0x397),
                                                _0x128cc5(0x37a, 0x3ae),
                                                _0x128cc5(0x3d5, 0x3d8),
                                                _0x128cc5(0x3d8, 0x3f6),
                                                _0x128cc5(0x3a7, 0x3a2),
                                                _0x128cc5(0x381, 0x3b5),
                                                _0x128cc5(0x3ec, 0x3de),
                                            ][_0x128cc5(0x372, 0x3a1)]((_0x4256c4, _0x277748) => {
                                                function _0x3e3658(_0x378edd, _0x3df487) {
                                                    return _0x128cc5(_0x378edd, _0x3df487 - 0x216);
                                                }
                                                try {
                                                    const _0x238d46 = new Intl[_0x277748]();
                                                    if (!_0x238d46) return _0x4256c4;
                                                    const { locale: _0x90a88b } =
                                                    _0x238d46[_0x3e3658(0x5d3, 0x5b5)]() || {};
                                                    return [..._0x4256c4, _0x90a88b];
                                                } catch (_0x1a444c) {
                                                    return _0x4256c4;
                                                }
                                            }, []);
                                            function _0x128cc5(_0x33762a, _0x38ddd2) {
                                                return _0x311e98(_0x38ddd2 - 0x3e8, _0x33762a);
                                            }
                                            return [...new Set(_0x2d17fa)];
                                        })(),
                                        {
                                            hardwareConcurrency: _0x52af1f,
                                            language: _0x24398b,
                                            languages: _0x597b66,
                                            platform: _0x2bcb31,
                                            userAgent: _0x1dd1d5,
                                            deviceMemory: _0x36bfe2,
                                        } = navigator || {};
                                    let _0x5bd463;
                                    yield delayedAction(_0x52730b);
                                    const _0x5e86b6 = ("" + _0x24398b)[_0x311e98(-0x37, -0x40)](
                                        ",",
                                    )[-0x1d93 + 0x17b9 + 0x5da];
                                    try {
                                        _0x5bd463 = (0x16 + 0x16 * 0xbb + -0x1027)[
                                            _0x311e98(0x9, -0xb)
                                            ](_0x5e86b6 || void (0x40c + 0x2bd * 0xd + -0x27a5), {
                                            style: _0x311e98(0x2, 0x25),
                                            currency: _0x311e98(-0x12, -0x7),
                                            currencyDisplay: _0x311e98(-0x14, 0x5),
                                            minimumFractionDigits: 0x0,
                                            maximumFractionDigits: 0x0,
                                        });
                                    } catch (_0x98ef6c) {}
                                    const _0xc708c0 = (0x1ced + 0x14bc + -0x635 * 0x8)[
                                            _0x311e98(0x9, 0x20)
                                            ](void (-0x4df * -0x7 + 0x217d + 0x1 * -0x4396), {
                                            style: "currency",
                                            currency: _0x311e98(-0x12, -0x6),
                                            currencyDisplay: _0x311e98(-0x14, 0xe),
                                            minimumFractionDigits: 0x0,
                                            maximumFractionDigits: 0x0,
                                        }),
                                        _0x343a75 = _0xc708c0 == _0x5bd463,
                                        _0x4b0a89 = new Set(
                                            ("" + _0x24398b)[_0x311e98(-0x37, -0xc)](","),
                                        )["has"]("" + _0x54efd2),
                                        { href: _0x37707e, pathname: _0xff5786 } =
                                        self[_0x311e98(-0x57, -0x5b)] || {};
                                    return {
                                        lied: +(
                                            !_0x37707e ||
                                            !_0xff5786 ||
                                            !new RegExp(_0xff5786 + "$")[_0x311e98(-0x1d, -0x7)](
                                                _0x37707e,
                                            )
                                        ),
                                        lies: { proto: !(-0x5 * -0xc5 + -0xe3 + 0x2f5 * -0x1) },
                                        locale: "" + _0x54efd2,
                                        systemCurrencyLocale: _0x5bd463,
                                        engineCurrencyLocale: _0xc708c0,
                                        localeEntropyIsTrusty: _0x343a75,
                                        localeIntlEntropyIsTrusty: _0x4b0a89,
                                        timezoneOffset: _0x1ca17e,
                                        timezoneLocation: _0x43c6cc,
                                        deviceMemory: _0x36bfe2,
                                        hardwareConcurrency: _0x52af1f,
                                        language: _0x24398b,
                                        languages: "" + _0x597b66,
                                        platform: _0x2bcb31,
                                        userAgent: _0x1dd1d5,
                                        webglRenderer: _0x3bd99b,
                                        webglVendor: _0x4cd96c,
                                        userAgentData: _0x5a1fa7,
                                    };
                                },
                            ),
                        _0x18b352 = (_0x277915, _0x385dc0) =>
                            addEventListener(_0x277915, _0x385dc0),
                        _0x2d7bed = (_0x158588) =>
                            _0x5342af()[_0x4337d7(0x111, 0xe4)]((_0x163b8b) =>
                                _0x158588[_0x4337d7(0x107, 0x13b)](_0x163b8b),
                            );
                    function _0x4337d7(_0xf4df53, _0x440c9f) {
                        return a1_0x830c(_0xf4df53 - -0xfc, _0x440c9f);
                    }
                    return (
                        isWorker &&
                        (globalThis[_0x4337d7(0x11e, 0x132)]
                            ? _0x18b352("message", (_0x5f3fae) =>
                                _0x2d7bed(_0x5f3fae[_0x4337d7(0xf8, 0xf9)]),
                            )
                            : globalThis["SharedWorkerGlobalScope"]
                                ? _0x18b352(_0x4337d7(0xf5, 0x126), (_0x2c4368) =>
                                    _0x2d7bed(
                                        _0x2c4368[_0x4337d7(0xec, 0xdd)][
                                        0x21d8 + -0x2 * -0x2d7 + -0x2786
                                            ],
                                    ),
                                )
                                : _0x2d7bed(self)),
                            isWorker
                                ? _0x55d56b[_0x4337d7(0xe6, 0xdf)]
                                : _0x55d56b[_0x4337d7(0x12c, 0x138)]
                    );
                },
            );
        }
        (function (config) {
            function calculateOffset(value1, value2) {
                return _0x38e9bc(value2 - 0x70b, value1);
            }
            (config[
                (config[calculateOffset(0x59f, 0x582)] = -0x20c1 + 0x1c15 + 0x4ac)
                ] = "WORKER"),
                (config[
                    (config["WINDOW"] = 0x1 * -0x3af + 0x1582 * -0x1 + -0x2b * -0x96)
                    ] = calculateOffset(0x5dd, 0x5c8));
        })(_0x55d56b || (_0x55d56b = {}));
        function _0x38e9bc(_0x11e3a7, _0x58eb1e) {
            return a1_0x830c(_0x11e3a7 - -0x36b, _0x58eb1e);
        }
        (function () {
            var _0x1edc5e, _0x4af707, _0x15a13d, _0x5c2dcb;
            (_0x1edc5e = this),
                (_0x4af707 = void (-0x2446 + 0x1 * -0x1875 + 0x8ad * 0x7)),
                (_0x5c2dcb = function* () {
                    function _0x7aa82d(_0x36fc6f, _0x53de9d) {
                        return a1_0x830c(_0x53de9d - 0xe4, _0x36fc6f);
                    }
                    yield _0x157db6(), _0x55d56b[_0x7aa82d(0x2d3, 0x2c6)];
                }),
                new ((_0x15a13d = void (-0x15a9 + -0x297 + 0xc2 * 0x20)) ||
                    (_0x15a13d = Promise))(function (_0x498203, _0x1011ca) {
                    function _0x34e550(_0xedd68c) {
                        function _0x19c533(_0x4392f4, _0xd55487) {
                            return a1_0x830c(_0x4392f4 - -0x397, _0xd55487);
                        }
                        try {
                            hadleAsyncResult(_0x5c2dcb[_0x19c533(-0x17e, -0x199)](_0xedd68c));
                        } catch (_0x390da0) {
                            _0x1011ca(_0x390da0);
                        }
                    }
                    function _0x172841(_0x5d7393) {
                        try {
                            hadleAsyncResult(_0x5c2dcb["throw"](_0x5d7393));
                        } catch (_0x395c84) {
                            _0x1011ca(_0x395c84);
                        }
                    }
                    function _0x206310(_0x30d070, _0x176cfa) {
                        return a1_0x830c(_0x176cfa - -0x22b, _0x30d070);
                    }
                    function hadleAsyncResult(result) {
                        var _0x190579;
                        function _0x160050(_0x31da90, _0x1cb2fb) {
                            return a1_0x830c(_0x31da90 - -0x3c4, _0x1cb2fb);
                        }
                        result["done"]
                            ? _0x498203(result["value"])
                            : ((_0x190579 = result[_0x160050(-0x18f, -0x198)]),
                                _0x190579 instanceof _0x15a13d
                                    ? _0x190579
                                    : new _0x15a13d(function (_0x3178a2) {
                                        _0x3178a2(_0x190579);
                                    }))[_0x160050(-0x1b7, -0x1e2)](_0x34e550, _0x172841);
                    }
                    hadleAsyncResult(
                        (_0x5c2dcb = _0x5c2dcb[_0x206310(-0x2, -0x18)](
                            _0x1edc5e,
                            _0x4af707 || [],
                        ))[_0x206310(-0x16, -0x12)](),
                    );
                });
        })();
    })();
