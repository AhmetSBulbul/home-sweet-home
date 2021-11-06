---
title: 'Toggle Özellikli useLockBodyScroll'
date: '2021-10-20'
description: 'Toggle özellikli useLockBodyScroll hook'
category:
    - react
    - hook
---

```javascript
import { useEffect } from "react";

export default function useLockBodyScroll(
  toggle
) {
  useEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(
      document.body
    ).overflow;
    // Prevent scrolling on toggle active
    document.body.style.overflow = toggle
      ? "hidden"
      : originalStyle;
    // Re-enable scrolling when toggle switched off
    return () =>
      (document.body.style.overflow =
        originalStyle);
  }, [toggle]); 
}
```