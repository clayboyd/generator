
/**
 * This contains the converted model object
 */
const model = {
  "name": "First Model",
  "classes": [
    {
      "name": "User",
      "properties": [
        {
          "type": "string",
          "required": true,
          "name": "email",
          "ui": {
            "type": "text",
            "label": "Email"
          }
        },
        {
          "type": "password",
          "required": true,
          "ui": {
            "private": true,
            "type": "password",
            "label": "Password"
          },
          "name": "password"
        },
        {
          "name": "firstName",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "First Name"
          }
        },
        {
          "name": "lastName",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "Last Name"
          }
        },
        {
          "type": "string",
          "ui": {
            "type": "textarea",
            "label": "Comment"
          },
          "name": "comment"
        }
      ]
    },
    {
      "name": "Address",
      "properties": [
        {
          "name": "street1",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "Street 1"
          }
        },
        {
          "name": "street2",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "Street 2"
          }
        },
        {
          "name": "city",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "City"
          }
        },
        {
          "name": "state",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "State"
          }
        },
        {
          "name": "zip",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "Zip"
          }
        },
        {
          "name": "country",
          "type": "string",
          "ui": {
            "type": "text",
            "label": "Country"
          }
        }
      ]
    },
    {
      "name": "Example",
      "properties": [
        {
          "private": true,
          "type": "password",
          "name": "password",
          "ui": {
            "type": "password",
            "label": "Password",
            "private": true
          }
        },
        {
          "type": "boolean",
          "ui": {
            "type": "checkbox",
            "label": "Checkbox"
          },
          "name": "checkbox"
        },
        {
          "ui": {
            "type": "radio",
            "options": {
              "values": [
                "first",
                "second",
                "third"
              ],
              "labels": [
                "First Radio",
                "Second",
                "Third one"
              ]
            },
            "label": "Radio"
          },
          "type": "string",
          "name": "radio"
        },
        {
          "ui": {
            "type": "select",
            "options": {
              "values": [
                "first",
                "second",
                "third"
              ],
              "labels": [
                "First Select",
                "Second",
                "Third one"
              ]
            },
            "label": "Select"
          },
          "type": "string",
          "name": "select"
        },
        {
          "type": "date",
          "name": "date",
          "ui": {
            "type": "date",
            "label": "Date"
          }
        },
        {
          "ui": {
            "type": "html",
            "label": "Html"
          },
          "type": "string",
          "name": "html"
        },
        {
          "type": "string",
          "ui": {
            "type": "textarea",
            "label": "Textarea"
          },
          "name": "textarea"
        }
      ]
    }
  ]
};

module.export = model

export default model
