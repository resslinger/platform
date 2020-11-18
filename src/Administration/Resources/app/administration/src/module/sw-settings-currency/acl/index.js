Shopware.Service('privileges')
    .addPrivilegeMappingEntry({
        category: 'permissions',
        parent: 'settings',
        key: 'currencies',
        roles: {
            viewer: {
                privileges: [
                    'currency:read',
                    'currency_country_rounding:read',
                    'country:read'
                ],
                dependencies: []
            },
            editor: {
                privileges: [
                    'currency:update',
                    'currency_country_rounding:update',
                    'currency_country_rounding:delete'
                ],
                dependencies: [
                    'currencies.viewer'
                ]
            },
            creator: {
                privileges: [
                    'currency:create'
                ],
                dependencies: [
                    'currencies.viewer',
                    'currencies.editor'
                ]
            },
            deleter: {
                privileges: [
                    'currency:delete'
                ],
                dependencies: [
                    'currencies.viewer'
                ]
            }
        }
    });
