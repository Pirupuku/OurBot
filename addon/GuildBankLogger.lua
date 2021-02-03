SlashCmdList["SLASH_GBL"] = function(flag) end

SLASH_GBL1 = "/gblog"
function SlashCmdList.GBL(args)
	log = ""
	for bag = 0,4 do
		for slot = 1,GetContainerNumSlots(bag) do
			local itemLink = GetContainerItemLink(bag,slot)
			if itemLink then
				local icon, itemCount = GetContainerItemInfo(bag, slot)
				local itemName = GetItemName(itemLink)

				log = table.concat({log, itemCount, " ", itemName, ","})
			end
		end
	end
end

function GetItemName(some_string)
	local name_start = string.find(some_string, "%[") + 1
	local name_end = string.find(some_string, "%]") - 1
	return string.sub(some_string, name_start, name_end)
end