import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({ 'is-active': tab.id === activeTabId })}
            data-cy="Tab"
          >
            <a
              href="#tab-1"
              data-cy="TabLink"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
