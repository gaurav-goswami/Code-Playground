interface IEvents {
    JOIN : string,
    JOINED : string,
    DISCONNECTED : string,
    CODE_CHANGE : string,
    SYNC_CODE : string,
    CHANGE_LANGUAGE : string,
    CHANGE_THEME : string,
}
 
const EVENTS : IEvents = {
    JOIN : 'join',
    JOINED : 'joined',
    DISCONNECTED : 'disconnected',
    CODE_CHANGE : 'code-change',
    SYNC_CODE : 'sync-code',
    CHANGE_LANGUAGE : 'change_language',
    CHANGE_THEME : 'change_theme'
}

export default EVENTS;