export function setReactFieldValue(
  el: HTMLInputElement | HTMLTextAreaElement,
  value: string
) {
  const prototype =
    el instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype;

  const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");
  const setter = descriptor?.set;

  if (setter) {
    setter.call(el, value);
  } else {
    el.value = value;
  }

  el.dispatchEvent(new Event("input", { bubbles: true }));
  el.dispatchEvent(new Event("change", { bubbles: true }));
}

export function getEditableFields(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'textarea:not([readonly]), input[type="text"], input[type="search"], input[type="url"], input[type="email"], input[type="password"], input[type="number"], input:not([type]):not([readonly])'
    )
  ).filter((el) => !el.disabled);
}

export function getReadonlyFields(root: HTMLElement) {
  return Array.from(
    root.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      "textarea[readonly], input[readonly]"
    )
  ).filter((el) => !el.disabled);
}

export function getBestOutputField(root: HTMLElement) {
  const readonlyFields = getReadonlyFields(root);
  if (readonlyFields.length > 0) {
    return readonlyFields[readonlyFields.length - 1];
  }

  const editable = getEditableFields(root);
  if (editable.length > 1) {
    return editable[editable.length - 1];
  }

  if (editable.length > 0) {
    return editable[0];
  }

  return null;
}
