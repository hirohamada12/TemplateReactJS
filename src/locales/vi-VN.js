import component from '@/locales/vi-VN/component';
import page from '@/locales/vi-VN/page';
import globalHeader from "@/locales/vi-VN/globalHeader";
import menu from "@/locales/vi-VN/menu";
import settingDrawer from "@/locales/vi-VN/settingDrawer";
import settings from "@/locales/vi-VN/settings";
import pwa from "@/locales/vi-VN/pwa";
import pages from "@/locales/vi-VN/pages";

export default {
  'navBar.lang': 'Ngôn ngữ',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...page,
  ...component,
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
};
