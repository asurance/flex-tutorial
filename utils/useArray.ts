import { Reducer, useCallback, useReducer } from 'react'

type Action<T> = AddAction<T> | RemoveAction<T> | UpdateAction<T> | ClearAction

type AddAction<T> = {
    type: 'Add',
    data: T,
}

type RemoveAction<T> = {
    type: 'Remove',
    data: T,
}

type UpdateAction<T> = {
    type: 'Update',
    data: T,
}

type ClearAction = {
    type: 'Clear',
}

export type UseArrayResult<T> = {
    state: T[];
    add(data: T): void;
    remove(data: T): void;
    update(data: T): void;
    clear(): void;
}

function ArrayReducer<T>(state: T[], action: Action<T>): T[] {
    switch (action.type) {
        case 'Add':
            return [...state, action.data]
        case 'Remove': {
            const index = state.indexOf(action.data)
            if (index >= 0) {
                return [...state.slice(0, index), ...state.slice(index + 1)]
            } else {
                return state
            }
        }
        case 'Update': {
            const index = state.indexOf(action.data)
            if (index >= 0) {
                return [...state.slice(0, index), action.data, ...state.slice(index + 1)]
            } else {
                return state
            }
        }
        case 'Clear':
            return []
        default:
            throw new Error('unknown array action type')
    }
}


export function useArray<T>(): UseArrayResult<T> {
    const [state, dispatch] = useReducer<Reducer<T[], Action<T>>>(ArrayReducer, [])
    const add = useCallback((data: T) => {
        dispatch({ type: 'Add', data })
    }, [])
    const remove = useCallback((data: T) => {
        dispatch({ type: 'Remove', data })
    }, [])
    const update = useCallback((data: T) => {
        dispatch({ type: 'Update', data })
    }, [])
    const clear = useCallback(() => {
        dispatch({ type: 'Clear' })
    }, [])
    return {
        state,
        add,
        remove,
        update,
        clear,
    }
}