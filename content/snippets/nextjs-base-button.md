---
title: 'Nextjs Base Button Component'
date: '2021-10-29'
description: 'Hem navigasyon için hem de işlevsel fonksiyonlar için kullanılabilen buton. Ek olarak işlevsel link özelliğini de destekliyor.'
category:
    - Nextjs
    - Component
---



### Parameters

- onClick
- href
- className


### Nasıl Çalışıyor?

Eğer href parametresi kullanılırsa link, onClick parametresi kullanılırsa button componentlerini geri döndürüyor. Hem href hem de onClick parametreleri kullanılırsa Nextjs Link componentinin [dökümanına](https://nextjs.org/docs/api-reference/next/link) göre oluşturulmuş FunctionalLink componentini döndürüyor.

### Bağımlılıklar

- [ClassNames](https://github.com/JedWatson/classnames)

### Kod

```javascript
import Link from "next/link";
import cn from "classnames";
import React from "react";


const FunctionalLink = React.forwardRef(
  (
    { onClick, href, children, ...props },
    ref
  ) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        {...props}
      >
        {children}
      </a>
    );
  }
);

function FunctionalLinkButton({
  href,
  children,
  onClick,
  ...props
}) {
  return (
    <Link href={href} passHref>
      <FunctionalLink
        onClick={onClick}
        {...props}
      >
        {children}
      </FunctionalLink>
    </Link>
  );
}

function LinkButton({
  href,
  children,
  ...props
}) {
  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}

function Button({ children, ...props }) {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}

const BaseButton = ({
  children,
  className,
  ...props
}) => {
  const CurrBtn = props.href
    ? props.onClick
      ? FunctionalLinkButton
      : LinkButton
    : Button;

  return (
    <CurrBtn className={className} {...props}>
      {children}
    </CurrBtn>
  );
};

export default BaseButton;
```