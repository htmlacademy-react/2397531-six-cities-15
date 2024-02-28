import { SORTOPTIONS } from '../../const';

type SortProps = {
  sortName: typeof SORTOPTIONS[number];
  isActive: boolean;
}

function SortType({sortName, isActive}: SortProps): JSX.Element {
  return (
    <li className={`places__option ${isActive && 'places__option--active'}`} tabIndex={0}>
      {sortName}
    </li>
  );
}

function SortTypes(): JSX.Element {
  return (
    <ul className="places__options places__options--custom"> {/* places__options--opened */}
      {SORTOPTIONS.map((sort, index) => <SortType sortName={sort} isActive={index === 0} key={sort}/>)}
    </ul>
  );
}

export default SortTypes;
