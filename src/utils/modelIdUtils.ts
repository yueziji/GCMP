/*---------------------------------------------------------------------------------------------
 *  模型 ID 工具函数
 *  统一处理 VS Code 暴露模型 ID（带 providerKey 前缀）与配置原始 ID 之间的转换
 *--------------------------------------------------------------------------------------------*/

/**
 * 生成对外暴露给 VS Code 的模型 ID（格式：`providerKey:rawModelId`）。
 * 避免不同 Provider 之间同名/同 ID 模型冲突。
 */
export function toExposedModelId(providerKey: string, rawModelId: string): string {
    if (!providerKey || !rawModelId) {
        return rawModelId;
    }
    const prefix = `${providerKey}:`;
    return rawModelId.startsWith(prefix) ? rawModelId : `${prefix}${rawModelId}`;
}

/**
 * 将 VS Code 侧的暴露 ID 还原为配置中的原始模型 ID。
 */
export function toRawModelId(providerKey: string, exposedModelId: string): string {
    if (!providerKey || !exposedModelId) {
        return exposedModelId;
    }
    const prefix = `${providerKey}:`;
    return exposedModelId.startsWith(prefix) ? exposedModelId.slice(prefix.length) : exposedModelId;
}
