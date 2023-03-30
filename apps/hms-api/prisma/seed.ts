/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const locations = [
  { id: '7b86497e-ebc9-49e4-b6e1-7be89e571331', name: '100 Mile House' },
  { id: '88c7bdfe-ba62-4fa0-93d6-d826a47a4887', name: 'Abbotsford' },
  { id: '5635e65c-a765-45a6-a3b8-69640c296c6e', name: 'Agassiz' },
  { id: '72ca6966-55c1-40a0-80bd-947f58919d1b', name: 'Alexis Creek' },
  { id: '3ab06042-ff2c-4711-816f-904447b1a17c', name: 'Ashcroft' },
  { id: 'ad3309ac-77ad-4dda-ac87-7abb73448dd7', name: 'Atlin' },
  { id: 'ecb86b91-d640-40c4-89c9-e7b71800db80', name: 'Barriere' },
  { id: '6f3fea21-6f9a-40f8-9f1f-5b6c0b6f8b0b', name: 'Bella Coola' },
  { id: '361e370c-d796-4738-a748-3caa1a509f00', name: 'Burnaby' },
  { id: 'de6f92a5-7eca-4661-981d-5166160bcb67', name: 'Burns Lake' },
  { id: 'e970b2a4-e7ad-44a0-93df-7ade97ea8f9e', name: 'Cache Creek' },
  { id: 'f6a77363-8b4c-42ab-b412-45c4986db555', name: 'Campbell River' },
  { id: 'e8f69f32-f9f6-49ef-8e61-ca0ed0255d5b', name: 'Castlegar' },
  { id: 'd956da1b-4eb5-4793-ac2d-2ae3819851d3', name: 'Chetwynd' },
  { id: 'a88fd08b-b9a8-43c0-82b6-0a57b04e68d8', name: 'Chilliwack' },
  { id: '407e9305-2f1f-48ff-9e87-261fee52fb32', name: 'Clearwater' },
  { id: '401dda12-bfa1-47b3-960e-86426edc62db', name: 'Clinton' },
  { id: 'b721bf1a-7974-4ade-9ea2-a4aae3cb6428', name: 'Cobble Hill' },
  { id: '52cb2e54-9e3d-4aee-95af-ab246ebf32e6', name: 'Colwood' },
  { id: '932081a0-126b-4785-8bf8-0312abb573d0', name: 'Comox' },
  { id: '38a70c6d-81dc-4bdc-9d69-5e8a754327ce', name: 'Coquitlam' },
  { id: 'f19e33bc-b1f9-4d64-bfdf-7370364cb888', name: 'Courtenay' },
  { id: '0cf42f76-c3c9-4cf3-965c-3fa5de3d971c', name: 'Cranbrook' },
  { id: 'c30d6c67-7d01-4503-9604-dff3d11f5bd3', name: 'Dawson Creek' },
  { id: 'ba727c33-e66f-44e8-aca5-a0af8b6ce66e', name: 'Dease Lake' },
  { id: 'e94e594b-8429-45b5-ae08-e3274d5dcdc2', name: 'Delta' },
  { id: '17bdcd44-fb3f-46da-aa43-76c1c12302c8', name: 'Duncan' },
  { id: '51e0eaa7-5e36-4992-b9d6-cf858d729d40', name: 'Fort Nelson' },
  { id: '1322cc36-6366-4ca5-aa5a-da0b68b262d7', name: 'Fort St James' },
  { id: 'b2b64fbc-15d4-4e2a-a9fc-5df97cc66390', name: 'Fort St John' },
  { id: 'f44b8f23-3b17-4336-8dfa-f3b4452e7517', name: 'Golden' },
  { id: 'cbe7f601-774b-4132-8735-b42d50130faf', name: 'Grand Forks' },
  { id: 'a98b9847-4075-4918-9ba1-d8d51ef2a360', name: 'Hazelton' },
  { id: '0926aa95-7323-4e89-a9ff-e7e1148ba738', name: 'Hope' },
  { id: '46eb19d3-2e68-4b93-ab52-f636309f3c42', name: 'Houston' },
  { id: 'dab3f873-2b5c-4aa6-91c1-59975611b1e0', name: 'Invermere' },
  { id: '30d556de-4193-4c75-aadb-29d5b1bdfd1f', name: 'Kamloops' },
  { id: '8cd7fa4c-ce04-4b2b-86be-579d990c1f99', name: 'Kelowna' },
  { id: 'b642a1cf-cffc-4aba-b13b-3fede3e03991', name: 'Keremeos' },
  { id: '77571a1a-af43-4599-9939-a067e4df88c4', name: 'Kitimat' },
  { id: 'd107171f-af4a-4d1c-9301-929748f66740', name: 'Kootenay Lake' },
  { id: '4179233c-75a8-4472-b16d-7dff63293be9', name: 'Langley' },
  { id: '7291362f-81c0-4d4e-b4b7-9f9073ee7483', name: 'Lillooet' },
  { id: '014b4b2d-9cbb-4ae1-a48b-f05a0653c4bf', name: 'Lytton' },
  { id: '9a0e5725-eb1c-4373-a8c8-8404f0cadb3c', name: 'Mackenzie' },
  { id: 'ea484669-d85c-4db3-b8d0-1916b23d2bce', name: 'Maple Ridge' },
  { id: '65d854b6-e5d1-4273-b356-226a59a4521a', name: 'Merritt' },
  { id: '4cd911c9-f266-484a-afa0-65c0b20d91ab', name: 'Mission' },
  { id: '566b01d3-7a92-4240-bbe1-86688ab4ce81', name: 'Multiple Locations' },
  { id: '45ced813-f873-4a81-8c92-831823e1e04a', name: 'Nakusp' },
  { id: '5b68a789-cf4c-463c-9f26-18bbb23eaf61', name: 'Nanaimo' },
  { id: '0588f6dc-8dc7-4cc3-a626-a738cebd925d', name: 'Nelson' },
  { id: '9c99b7ef-cfd5-4dd3-be37-8b341f29e8ff', name: 'New Westminster' },
  { id: 'f952cad9-0520-440f-987e-efcf01e9e0e4', name: 'North Vancouver' },
  { id: 'cb69884a-7e92-4b03-8387-3eb05d9521e0', name: 'Oliver' },
  { id: '5a8433d1-4fdc-4806-a9f0-634b534c99d7', name: 'Osoyoos' },
  { id: 'f39610ea-15c4-44dc-8803-9fe7c2dc6510', name: 'Parksville' },
  { id: 'fa539b0a-9b4c-46df-9522-d94bb1854deb', name: 'Pemberton' },
  { id: 'c0db0422-f8b6-47fa-afa8-dfab99913193', name: 'Penticton' },
  { id: '1921ac7c-2fad-42ac-a483-9a4c3abc68a8', name: 'Port Alberni' },
  { id: 'e14e4847-ac71-4d19-82a8-ad83f62e612e', name: 'Port Coquitlam' },
  { id: '2359510b-74c8-4c47-89e9-d568d4323cff', name: 'Port Hardy' },
  { id: '617e28f2-7746-40ff-9e5e-f12f55fe00e1', name: 'Port McNeill' },
  { id: '76034e1b-e17e-497a-8f58-51c3e2d214bc', name: 'Port Moody' },
  { id: 'd51f24af-3eb5-4243-bd0d-9a641f4af9ec', name: 'Powell River' },
  { id: 'c091f143-ae06-4120-850e-373ceef6c666', name: 'Prince George' },
  { id: '12d43d99-1b49-463b-8e97-105ccfeeff1a', name: 'Prince Rupert' },
  { id: '63f1a4e6-96fd-42ea-8545-b7ad208edfa8', name: 'Princeton' },
  { id: 'decd1f4e-1792-401f-941e-72cbab7004d4', name: 'Queen Charlotte' },
  { id: 'ae12ce65-93c2-4f11-b54c-ad86f6b6a824', name: 'Quesnel' },
  { id: '4e92218e-b60e-4501-bccb-3e1cd3aa2056', name: 'Revelstoke' },
  { id: '4d1bb85b-8182-487b-833e-d94a5937ffb9', name: 'Richmond' },
  { id: 'f3b07453-e667-4958-a574-f37f1805bc6e', name: 'Saanichton' },
  { id: 'cb70fe13-448a-4c36-8075-7ffb15aa6062', name: 'Salmon Arm' },
  { id: '5b81ddc3-e085-41e3-8b83-53d052f44c26', name: 'Salt Spring Island' },
  { id: 'a151bce0-a6e5-4367-9a76-9fe5c8bf5a55', name: 'Sechelt' },
  { id: '045d1ab9-f244-4d96-90bd-f95aeeb17b15', name: 'Sicamous' },
  { id: '14535a1f-0a44-4097-a5f3-1ed766ea3f49', name: 'Smithers' },
  { id: 'd87d9a4e-a1f1-4903-94cc-b5422fa6e542', name: 'Sooke' },
  { id: 'b97d4804-e225-42e0-b53e-ce574c488e01', name: 'Squamish' },
  { id: '98412957-7a36-4a57-a743-fbfe3658d2fb', name: 'Surrey' },
  { id: '11ac45ed-6ceb-409b-8bb6-1a88b5d5b9bd', name: 'Terrace' },
  { id: '9c6219f8-de8b-42dd-8adb-08bbe98329a9', name: 'Tofino' },
  { id: 'eb0a9569-9920-45ed-9466-b3284a594002', name: 'Trail' },
  { id: 'a0859d92-5940-46c1-a2ce-2fe23699116b', name: 'Valemount' },
  { id: '75d12390-d6cc-4e96-8e2d-4fc55897c90f', name: 'Vancouver' },
  { id: 'c046cec6-d511-41e3-a556-62e6627b2514', name: 'Vanderhoof' },
  { id: 'fa2dcb14-d9c8-476d-96b7-817a88ae4e45', name: 'Vernon' },
  { id: '92e1d40b-bd0b-4e28-bbeb-381cbe60a52b', name: 'Victoria' },
  { id: '7512e625-93f7-4445-8302-0210d37f3bf5', name: 'White Rock' },
  { id: 'c229203c-5d24-4165-b27f-64f1b83ef529', name: 'Williams Lake' },
];

const ministries = [
  { id: '9bd3b547-dfc4-4c9f-89df-89c09f802a3f', code: '101', name: 'Agriculture and Food' },
  { id: 'c027f0c5-3f96-44f4-8637-5bb404989a99', code: '87', name: 'Attorney General' },
  { id: '1b916b02-60de-4035-adbf-e05beee10dae', code: '113', name: 'BC Financial Services Authority' },
  { id: '176d6ceb-bdcc-435a-a865-f74b2f18abc6', code: '77', name: 'BC Pension Corp' },
  { id: '82d658f6-18a9-40ee-913c-ad9d5111f024', code: '85', name: 'BC Public Service Agency' },
  { id: '32a5918b-c60e-4ccb-9522-540367838ed7', code: '90', name: 'BC Rep for Children & Youth' },
  { id: '983d3e61-8606-443f-a8e2-798df9ccb3c2', code: '60', name: 'Children & Family Development' },
  { id: 'bc11d569-55fb-4110-83c5-b98e0a1985cc', code: '92', name: "Citizens' Services" },
  { id: '71c0fe67-010b-4403-8d32-d844ed06231f', code: '42', name: "Conflict of Interest Commiss'r" },
  { id: 'f31d9486-9162-43bd-ad04-d838b90cd28a', code: '110', name: 'Destination BC Corp.' },
  { id: '2c24dfc7-5bf5-46e8-b992-b6aa0af5a37a', code: '69', name: 'Education and Child Care' },
  { id: 'b2420a8b-dacc-4512-8dd6-409bb5246f37', code: '47', name: 'Elections BC' },
  { id: '6fbd9854-e0ff-4e6f-a353-03b99d0a3592', code: '117', name: 'Emerg Mgt, Climate Readiness (EMCR)' },
  { id: '8b0a6c27-5345-44e7-acfd-0d4eacfbd557', code: '66', name: 'Energy, Mines & Low Carb Inn.' },
  { id: '3f7f5d89-abbb-4373-82bc-4eeee3f0c780', code: '63', name: 'Env & Climate Change Strategy' },
  { id: '3a25185c-cb94-4ae7-bea7-05aade0be224', code: '93', name: 'Env Assessment Office' },
  { id: '7d4fcb28-37e1-4401-8cb4-43f9c2f3fbee', code: '26', name: 'Forest Practices Board' },
  { id: '9b28cc84-d3c4-4cfe-8f85-1daa1f157ef5', code: '112', name: 'Government Communication and Public Engagement' },
  { id: 'da1f2067-5b9e-4021-a1ff-60b840a029bb', code: '54', name: 'Health' },
  { id: 'a222bcd1-b383-42ce-9368-74632d2ed166', code: '94', name: 'Indigenous Relations & Recon' },
  { id: '863873ab-73c5-4364-8cb9-a9746ba34d2a', code: '28', name: 'Islands Trust' },
  { id: 'fc7ae9c6-0962-4ef5-be9b-e92b2d93f690', code: '96', name: 'Jobs, Econom Dev & Innovation' },
  { id: '613d04a0-097e-4880-be06-52cc555da973', code: '29', name: 'Liquor Distribution Branch' },
  { id: 'dfa74f27-30e2-4aec-a45c-cfa49ea56df3', code: '56', name: 'Mental Health & Addictions' },
  { id: 'c3b4afce-3f03-4864-b403-e4ea125b01e3', code: '58', name: 'Min of Trans & Infrastructure' },
  { id: 'c1df8fe6-7c91-4baa-8105-f861265e9981', code: '50', name: 'Ministry of Finance' },
  { id: '17f09153-84ed-4e83-8e62-f7b328879e88', code: '99', name: 'Ministry of Forests' },
  { id: 'ccd9d591-c2ac-47b1-b2a3-02847ab4effc', code: '102', name: 'Ministry of Housing' },
  { id: 'd538be38-7322-42dd-b1d6-93453d11fd0e', code: '98', name: 'Ministry of Labour' },
  { id: 'ad09b06e-01eb-45e3-978d-46e10f25335f', code: '68', name: 'Municipal Affairs' },
  { id: '65c54c8e-3bfa-4242-9bd7-a5992123227e', code: '88', name: 'Off of the Merit Commissioner' },
  { id: '168253af-5f6a-4c11-bb6e-68fdd52dbc04', code: '53', name: 'Off of the Police Complaint Co' },
  { id: 'af73cd45-0e8d-4df5-8ade-b355eb292bd6', code: '44', name: 'Office of Info & Priv Comm' },
  { id: 'cdf3c006-cc2e-4b64-be7e-fcdb7e6a4ebc', code: '30', name: 'Office of the Auditor General' },
  {
    id: '96342c58-0bc1-44c6-8590-d713a2aba844',
    code: '114',
    name: 'Office of the Human Rights Commissioner for British Columbia',
  },
  { id: 'f102f62d-fcee-4ad9-a0fc-5c67782cf7c2', code: '33', name: 'Office of the Ombudsperson' },
  { id: '3dc2c2bd-265d-443c-8aa6-d0680b8d130e', code: '41', name: 'Office of the Premier' },
  { id: '60d64638-2968-4a67-84f4-db7ef9112a82', code: '36', name: 'Other Public Sector' },
  { id: 'b0b5d72a-c295-4d81-8140-43835b24bf5d', code: '48', name: 'Post-Sec Ed & Future Skills' },
  { id: '150b2826-cd4c-4717-b2dc-b921b76e8eca', code: '72', name: 'Product Services' },
  { id: 'c0a80c89-0861-4d66-897a-94832bc78a7a', code: '86', name: 'Public Guardian and Trustee' },
  { id: '6873fa42-9c19-4ff8-bf63-96c8991e2d3f', code: '45', name: 'Public Safety & Sol General' },
  { id: '6ec3906d-0358-453f-8967-3495e4a697d4', code: '38', name: 'Royal BC Museum' },
  { id: 'e4c63899-7263-411d-820a-759d9ed001d1', code: '57', name: 'Social Dev & Poverty Reduction' },
  { id: '67e847e6-474f-4c07-ac56-d39dd49f6d64', code: '70', name: 'Teachers Act Special Account' },
  { id: 'e0e989b6-6eb6-4f1d-a075-0a28da63f575', code: '97', name: 'Tourism, Arts, Culture & Sport' },
  { id: 'a91f607f-e702-4c88-a026-e6800f4c30cb', code: '116', name: 'Water,Land,ResourceStewardship' },
];

const roles = [
  { id: '7aeea66e-2eaf-489a-8bde-40cf61afaf8c', name: 'Dev Ops Specialist', classification: 'IS 27' },
  { id: '72db9565-f94c-4907-9822-fa8b3e9393ac', name: 'Full Stack Developer Level 1', classification: 'IS 18' },
  { id: '60553785-080b-409c-87e1-36e959364f04', name: 'Full Stack Developer Level 2', classification: 'IS 21' },
  { id: '1db6e3dc-492d-4af6-bfa4-941a7df69b73', name: 'Full Stack Developer Level 3', classification: 'IS 24' },
  { id: '324b2b66-a52d-43ca-9297-446521bc21c6', name: 'Full Stack Developer Level 4', classification: 'IS 27' },
  { id: '7ae3e73c-884c-4071-8e1b-b8a571d10605', name: 'Full Stack Developer', classification: 'IS 30' },
  { id: '3b7a4f29-10fd-4561-bbe7-2adcc1678e35', name: 'Senior Product Manager', classification: 'Band 3' },
  { id: 'd1f5bf06-afa8-45cc-a3a6-9e1db10a3cee', name: 'Product Manager', classification: 'IS 30' },
  { id: 'ba70b032-c934-4001-a51d-35d2dda0dfef', name: 'Senior Scrum Master Technical', classification: 'IS 27' },
  { id: 'fb2f2ee2-10e9-4fa0-a6e0-01343ed531e6', name: 'Scrum Master Technical', classification: 'IS 24' },
  { id: 'f5bd1f05-0d45-4d19-b351-4afe9713039e', name: 'Site Reliability Specialist Lead', classification: 'IS 30' },
  { id: '87cd8345-0831-4bf1-b9cf-9a767c5bf032', name: 'Site Reliability Specialist', classification: 'IS 27' },
  { id: 'abd2d889-d463-40a9-9489-76a313bc7320', name: 'Senior User Experience Researcher', classification: 'AO 27' },
  { id: '8f5e3958-3650-4b20-8346-cceeab7eccba', name: 'User Experience Researcher', classification: 'AO 24' },
  { id: '892698a9-ff4a-4068-906c-f328d7162050', name: 'Senior User Experience Designer', classification: 'IS 27' },
  { id: 'c1d6bb26-9e75-43d3-88b0-32f681362934', name: 'User Experience Designer', classification: 'IS 24' },
];

async function main() {
  for (const location of locations) {
    const { id, ...rest } = location;

    await prisma.location.upsert({
      where: { id },
      update: { ...rest },
      create: { id, ...rest },
    });
  }

  for (const ministry of ministries) {
    const { id, ...rest } = ministry;

    await prisma.ministry.upsert({
      where: { id },
      update: { ...rest },
      create: { id, ...rest },
    });
  }

  for (const role of roles) {
    const { id, ...rest } = role;

    await prisma.digitalTalentRole.upsert({
      where: { id },
      update: { ...rest },
      create: { id, ...rest },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
