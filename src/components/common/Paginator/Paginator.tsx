import React from 'react';
import s from "./Paginator.module.css";


type PropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <>
            <div className={s.wrapper}>
                {pages.map(p => {
                    return <span key={p}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                                 className={props.currentPage! === p && `${s.page} ${s.selectedPage}` || s.page}>{p}
                        </span>
                })}
            </div>
        </>
    );
};

export default Paginator;
