import React from 'react';
import styles from "./PaginationWrapper.module.css";

export const PaginationWrapper = ({children, currentPage, totalPages, onFirstClick, onPrevClick, onNextClick, onLastClick}) => {

    const handlePrevClick = () => {
        if (currentPage - 1 > 0) {
            onPrevClick && onPrevClick(currentPage - 1)
        }
    }

    const handleNextClick = () => {
        if (currentPage + 1 <= totalPages) {
            onNextClick && onNextClick(currentPage + 1)
        }
    }

    const handleFirstClick = () => {
        onFirstClick && onFirstClick(1)
    }

    const handleLastClick = () => {
        onLastClick && onLastClick(totalPages)
    }

    return (
        <div>
            {children}
            <div className={styles.pagination}>
                <button disabled={currentPage === 1} onClick={handleFirstClick}>first page</button>
                <button disabled={currentPage === 1} onClick={handlePrevClick}>prev page</button>
                <span>{currentPage} of {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={handleNextClick}>next page</button>
                <button disabled={currentPage === totalPages} onClick={handleLastClick}>last page</button>
            </div>
        </div>
    )
}