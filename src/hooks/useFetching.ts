import { useEffect } from 'react';
import { useDispatch } from 'react-redux';


export const useFetching = (fetchActionCreator: any) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchActionCreator());
    }, [])
}