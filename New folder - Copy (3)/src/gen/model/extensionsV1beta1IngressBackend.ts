/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.21.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1TypedLocalObjectReference } from './v1TypedLocalObjectReference';

/**
* IngressBackend describes all endpoints for a given service and port.
*/
export class ExtensionsV1beta1IngressBackend {
    'resource'?: V1TypedLocalObjectReference;
    /**
    * Specifies the name of the referenced service.
    */
    'serviceName'?: string;
    /**
    * Specifies the port of the referenced service.
    */
    'servicePort'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resource",
            "baseName": "resource",
            "type": "V1TypedLocalObjectReference"
        },
        {
            "name": "serviceName",
            "baseName": "serviceName",
            "type": "string"
        },
        {
            "name": "servicePort",
            "baseName": "servicePort",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return ExtensionsV1beta1IngressBackend.attributeTypeMap;
    }
}

