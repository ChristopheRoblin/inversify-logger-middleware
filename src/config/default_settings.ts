/// <reference path="../interfaces/interfaces.d.ts" />

let deatultOptions: ILoggerSettings = {
    request: {
        bindings: {
            activated: false,
            cache: false,
            constraint: false,
            dynamicValue: false,
            factory: false,
            implementationType: true,
            onActivation: false,
            provider: false,
            scope: true,
            serviceIdentifier: false,
            type: true
        },
        serviceIdentifier: true,
        target: {
            metadata: true,
            name: true,
            serviceIdentifier: true
        }
    },
    time: true
};

export default deatultOptions;