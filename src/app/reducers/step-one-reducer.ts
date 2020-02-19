import { Action } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from '../actions/index.actions';

const initialState: User = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    KRA: '',
    nationalID: '',
    companyName: '',
    companyLocation: '',
    companyRevenue: ''

};

export function reducer(state: User[] = [initialState], action: UserActions.Actions) {

    switch (action.type) {
        case UserActions.ADD_USER:
            return [action.payload];
        default:
            return state;
    }
}
