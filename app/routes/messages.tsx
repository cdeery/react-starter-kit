/* SPDX-FileCopyrightText: 2014-present Kriasoft */
/* SPDX-License-Identifier: MIT */

import { usePageEffect } from "../core/page";
import MyMessages from "../messages/components/MyMessages";

export const Component = function Messages(): JSX.Element {
  usePageEffect({ title: "Messages" });

  return <MyMessages />;
};
