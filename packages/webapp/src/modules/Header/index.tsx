import { Fragment, useState, useEffect } from 'react';
import Link from 'next/link';
import { get } from 'lodash';
import {
  Dialog,
  Menu,
  Disclosure,
  Popover,
  Transition
} from '@headlessui/react';
import { connect } from 'react-redux';
import { withRouter } from 'next/router';
import navMenu from '@/utils/nav-menu.json';
import Button from '@/components/button';
import InlineSvg from '@/components/inline-svg';
import { mergeCls } from '@/utils/helper';

const Index = (props: any) => {
  const { token, router, user } = props;
  const { afterLogin, beforeLogin, afterPayment } = navMenu;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('tools');
  const status = get(user, 'userMeta.paymentInfo.status', '');

  let navigation = beforeLogin;
  if (token && status === 'active') {
    navigation = afterPayment;
  } else if (token) {
    navigation = afterLogin;
  }

  useEffect(() => {
    const currentPath = router.pathname;
    if (currentPath.includes('tools')) {
      setActiveItem('tools');
    } else if (currentPath.includes('history')) {
      setActiveItem('history');
    } else if (currentPath.includes('settings')) {
      setActiveItem('settings');
    } else if (currentPath.includes('signin')) {
      setActiveItem('signin');
    }
  }, [router, setActiveItem]);

  function menuClickHandler(menu: string) {
    switch (menu) {
      case 'history':
      case 'settings':
      case 'signin': {
        router.push(`/${menu}`);
        break;
      }
      case 'payment': {
        break;
      }
      default: {
        router.push('/');
      }
    }
    setActiveItem(menu);
  }

  return (
    <header>
      <nav
        className="mx-auto h-12 flex items-center justify-between py-0 px-5 mb-14"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <InlineSvg src="/assets/svg/logo.svg" width={155} height={24} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-dark-900"
            onClick={() => setMobileMenuOpen(true)}
          >
            <InlineSvg
              className="text-center"
              src="/assets/svg/bars3.svg"
              width={25}
              height={25}
            />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {navigation &&
            navigation.map((item: any, i: number) => (
              <div key={`main-menu-${String(i)}`}>
                {item.dropDown ? (
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button
                        className={mergeCls([
                          'flex items-center gap-x-1 text-sm font-semibold leading-6 text-dark-900 border-b-4',
                          activeItem === item.value
                            ? 'border-primary-900'
                            : 'border-transparent'
                        ])}
                        onClick={() => menuClickHandler(item.value)}
                      >
                        <span className="">{item.label}</span>
                        <InlineSvg
                          className="text-center"
                          src="/assets/svg/arrow.svg"
                          width={18}
                          height={18}
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-dark-900 ring-opacity-5 focus:outline-none">
                        {item.dropDown.map((dropVal: any) => (
                          <Menu.Item key={dropVal.value}>
                            {({ active }) => (
                              <button
                                key={dropVal.value}
                                className={mergeCls([
                                  active ? 'bg-light-800' : '',
                                  'block px-4 py-2 text-sm text-dark-700 w-full text-left'
                                ])}
                                onClick={() => menuClickHandler(dropVal.value)}
                              >
                                {dropVal.label}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                ) : (
                  <Button
                    type="button"
                    key={item.value}
                    className={mergeCls([
                      item.value === 'payment' || item.value === 'signin'
                        ? 'default-shadow bg-primary-900 rounded-full px-5 h-9 text-sm font-bold mt-2'
                        : 'h-12 text-sm font-semibold leading-6 text-dark-900 border-b-4',
                      activeItem === item.value
                        ? 'border-primary-900'
                        : 'border-transparent'
                    ])}
                    onClick={() => menuClickHandler(item.value)}
                  >
                    {item.label}
                  </Button>
                )}
              </div>
            ))}
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-light-700 px-5 sm:max-w-sm sm:ring-1 sm:ring-dark-900/10">
          <div className="flex items-center justify-between mb-16 h-12">
            <Link href="/">
              <InlineSvg src="/assets/svg/logo.svg" width={155} height={24} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-dark-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <InlineSvg
                className="text-center"
                src="/assets/svg/xmark.svg"
                width={25}
                height={25}
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-dark-500/10">
              <div className="space-y-2 py-6">
                {navigation &&
                  navigation.map((item: any, i: number) => (
                    <div key={`main-menu-${String(i)}`}>
                      {item.dropDown ? (
                        <Disclosure as="div" className="-mx-3">
                          {({ open }) => (
                            <>
                              <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-dark-100">
                                Settings
                                <InlineSvg
                                  className={mergeCls([
                                    open ? 'rotate-180' : '',
                                    'text-center'
                                  ])}
                                  src="/assets/svg/arrow.svg"
                                  width={18}
                                  height={18}
                                />
                              </Disclosure.Button>
                              <Disclosure.Panel className="mt-2 space-y-2">
                                {item.dropDown.map((item: any) => (
                                  <Disclosure.Button
                                    key={item.value}
                                    as="a"
                                    href={item.value}
                                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-dark-900 hover:bg-dark-100"
                                    onClick={() => menuClickHandler(item.value)}
                                  >
                                    {item.label}
                                  </Disclosure.Button>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ) : (
                        <button
                          key={item.value}
                          className={mergeCls([
                            item.value === 'payment' || item.value === 'signin'
                              ? 'default-shadow bg-primary-900 rounded-full px-3 h-9 text-sm font-bold text-center mx-auto'
                              : 'rounded-lg w-full py-2 px-4 hover:bg-dark-100 text-2xl font-bold',
                            'text-left leading-7 text-dark-900 flex justify-center mb-12'
                          ])}
                          onClick={() => menuClickHandler(item.value)}
                        >
                          {item.label}
                        </button>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

Index.defaultProps = {
  navigation: []
};

const mapStateToProps = (state: any) => ({
  token: state.auth.token,
  user: state.user.user
});

export default connect(mapStateToProps, null)(withRouter(Index));
