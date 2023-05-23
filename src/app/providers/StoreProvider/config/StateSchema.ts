import { EnhancedStore } from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/AuthByUserName';
import { rtqApi } from '@/shared/api/rtqApi';
import { ReducerManager } from './reducerManager';
import { TwoFASchema } from '@/features/TwoFAConfirm';
import { CreateOfferSchema } from '@/features/CreateOffer';
import { AllOrdersTableSchema } from '@/widgets/AllOrdersTable';
import { ReplenishSchema } from '@/features/replenish';
import { TokenApiSchema } from '@/widgets/TokenApi';
import { UploadReceiptSchema } from '@/features/UploadReceipt';
import { AppealsSchema } from '@/widgets/Appeals';
import { ViewSchema } from '@/features/ToggleButtonGroup';
import { ShowPictureSchema } from '@/features/ShowPicture';
import { HistoryTableSchema } from '@/widgets/HistoryTable';
import { UserStatSchema } from '@/widgets/UserStat';
import { RequisitesTableSchema } from '@/widgets/RequisitesTable';
import { CreateRequisitesSchema } from '@/features/CreateRequisites';
import { ChangePasswordSchema } from '@/features/ChangePasswordButton';

export interface StateSchema {
    user: UserSchema;
    view: ViewSchema;
    loginForm: LoginSchema;
    twoFAForm: TwoFASchema;
    createOffer: CreateOfferSchema;
    allOrdersTable: AllOrdersTableSchema;
    replenish: ReplenishSchema;
    changePassword: ChangePasswordSchema;
    tokenApi: TokenApiSchema;
    uploadReceipt: UploadReceiptSchema,
    appeals: AppealsSchema,
    showPicture: ShowPictureSchema,
    historyTable: HistoryTableSchema,
    userStat: UserStatSchema,
    requisitesTable: RequisitesTableSchema,
    createRequisites: CreateRequisitesSchema,
    [rtqApi.reducerPath]: ReturnType<typeof rtqApi.reducer>,
}

export type StateSchemaKey = keyof StateSchema;

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    state: StateSchema;
}
