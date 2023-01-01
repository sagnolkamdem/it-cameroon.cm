const Search = ({classMeta}: { classMeta: string}) => {
    return ( 
        <div className={classMeta}>
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 sr-only">Search</label>
            <div className="relative flex items-center w-full">
                <input type="text" name="search" id="search" className="block z-50 w-full rounded-md dark:bg-gray-800 dark:border-transparent dark:text-white  border-gray-300 pr-12 shadow-sm focus:border-primary-800 focus:ring-primary-500 sm:text-sm" />
                <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                    <kbd className="z-50 inline-flex items-center rounded border border-gray-200 dark:border-gray-600 dark:bg-slate-700 px-2 font-sans text-sm font-medium text-gray-400">⌘K</kbd>
                </div>
            </div>
        </div>
     );
}
 
export default Search;