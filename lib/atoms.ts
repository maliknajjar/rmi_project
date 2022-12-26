import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

export const sessionState = atom({
    key: 'sessionState',
    default: null,
});